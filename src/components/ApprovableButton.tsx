import React, { useState, useEffect, ReactElement } from 'react';
import { ethers } from 'ethers';
import { useConnectWallet } from '@web3-onboard/react';

type ApprovableButtonProps = {
  chainId: string;
  token: string;
  amount: string;
  spender: string;
  approveButton: (onApprove: () => void, pending: boolean) => ReactElement;
  actionButton: ReactElement;
  unknownState: ReactElement;
};

/**
 * ApprovableButton - A meta component that determines if approval is required for a transaction
 * and renders either an approve button, an action button, or an unknown state.
 *
 * @param {ApprovableButtonProps} props - Props for the component.
 */
const ApprovableButton: React.FC<ApprovableButtonProps> = ({
  chainId,
  token,
  amount,
  spender,
  approveButton,
  actionButton,
  unknownState,
}) => {
  const [approvalNeeded, setApprovalNeeded] = useState<boolean | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [{ wallet }, connect] = useConnectWallet();

  const checkApproval = async () => {
    try {
      if (!chainId || !token || !amount || !spender || !wallet) {
        console.error('Invalid parameters provided or wallet not connected.');
        return;
      }

      const provider = new ethers.BrowserProvider(wallet.provider);
      const signer = await provider.getSigner();

      const erc20Abi = [
        'function allowance(address owner, address spender) view returns (uint256)',
      ];

      const contract = new ethers.Contract(token, erc20Abi, signer);
      const owner = await signer.getAddress();
      const allowance = await contract.allowance(owner, spender);

      const amountInWei = ethers.parseUnits(amount, 18);

      setApprovalNeeded(allowance < amountInWei);
    } catch (error) {
      console.error('Error checking approval:', error);
      setApprovalNeeded(null); // Reset to unknown state in case of error.
    }
  };

  const handleApprove = async () => {
    try {
      if (!wallet) {
        console.error('Wallet not connected.');
        await connect();
        return;
      }

      const provider = new ethers.BrowserProvider(wallet.provider);
      const signer = await provider.getSigner();

      const erc20Abi = [
        'function approve(address spender, uint256 amount) returns (bool)',
      ];

      const contract = new ethers.Contract(token, erc20Abi, signer);
      const amountInWei = ethers.parseUnits(amount, 18);

      setPending(true);

      const transaction = await contract.approve(spender, amountInWei);

      await transaction.wait(); // Wait for the transaction to be mined

      // Keep checking the approval status
      const interval = setInterval(async () => {
        try {
          const owner = await signer.getAddress();
          const allowance = await contract.allowance(owner, spender);

          if (allowance.gte(amountInWei)) {
            setPending(false);
            setApprovalNeeded(false);
            clearInterval(interval);
          }
        } catch (error) {
          console.error('Error while checking approval status:', error);
        }
      }, 3000);
    } catch (error) {
      console.error('Error during approval:', error);
      setPending(false);
    }
  };

  useEffect(() => {
    checkApproval();
  }, [chainId, token, amount, spender, wallet]);

  if (approvalNeeded === null) {
    return unknownState; // Render the unknown state when approval status is undetermined.
  }

  return approvalNeeded ? approveButton(handleApprove, pending) : actionButton;
};

export default ApprovableButton;
