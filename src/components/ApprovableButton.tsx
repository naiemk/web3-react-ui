import React, { useState, useEffect, ReactElement } from 'react';
import { useConnectWallet } from '@web3-onboard/react';
import { useConnectWalletSimple, useContracts } from './Contracts';
import { ERC20_ABI, useErc20 } from './Erc20';

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
export const ApprovableButton: React.ComponentType<ApprovableButtonProps> = ({
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
  const { callMethod, execute } = useContracts();
  const { address, chainId } = useConnectWalletSimple();
  const { toMachineReadable, tokenData } = useErc20(token, chainId!);

  const checkApproval = async () => {
    try {
      if (!amount || Number(amount) === 0) {
        console.warn('Amount is 0, skipping approval check.');
        return;
      }
      if (!chainId || !token || !spender || !address) {
        console.warn('Invalid parameters provided or wallet not connected.', { chainId, token, amount, spender, address });
        return;
      }

      const allowance = await callMethod(chainId, token, ERC20_ABI.ALLOWANCE, [address, spender]);
      console.log('allowance', allowance);
      const amountInWei = toMachineReadable(amount);
      console.log('allowance-amountInWei', amountInWei);
      if (amountInWei) {
        setApprovalNeeded(allowance < amountInWei);
      }
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

      setPending(true);
      const amountInWei = toMachineReadable(amount);
      const tx = await execute(token, ERC20_ABI.APPROVE, [spender, amountInWei]);
      console.log('approve tx executed', tx);

      // Keep checking the approval status
      const interval = setInterval(async () => {
        try {
          const allowance = await callMethod(chainId!, token, ERC20_ABI.ALLOWANCE, [address, spender]);
          console.log('allowance received', allowance);
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
    if (tokenData) {
      checkApproval();
    }
  }, [chainId, token, amount, spender, wallet, tokenData]);

  if (approvalNeeded === null) {
    return unknownState; // Render the unknown state when approval status is undetermined.
  }

  return approvalNeeded ? approveButton(handleApprove, pending) : actionButton;
};
