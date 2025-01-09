import React, { useState, useEffect, ReactElement } from 'react';
import { useConnectWallet } from '@web3-onboard/react';
import { useConnectWalletSimple, useContracts } from './Contracts';
import { ERC20_ABI, NATIVE_TOKEN_ADDRESS, useErc20 } from './Erc20';

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
  const { callMethod, execute, error } = useContracts();
  const { address, chainId } = useConnectWalletSimple();
  const { toMachineReadable, tokenData } = useErc20(token, chainId!);

  useEffect(() => {
    if (error) {
      console.error('Error checking approval:', error);
    }
  }, [error]);

  const checkApproval = async () => {
    try {
      if (token === NATIVE_TOKEN_ADDRESS) {
        setApprovalNeeded(false);
        return;
      }
      if (!amount || Number(amount) === 0 || Number.isNaN(Number(amount))) {
        console.warn('Amount is 0 or NaN, skipping approval check.');
        setApprovalNeeded(null);
        return;
      }
      if (!chainId || !token || !spender || !address) {
        console.warn('Invalid parameters provided or wallet not connected.', { chainId, token, amount, spender, address });
        setApprovalNeeded(null);
        return;
      }

      const allowance = await callMethod(chainId, token, ERC20_ABI.ALLOWANCE, [address, spender]) as BigInt;
      const amountInWei = toMachineReadable(amount) as BigInt;
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
      const amountInWei = toMachineReadable(amount) as BigInt;
      const tx = await execute(token, ERC20_ABI.APPROVE, [spender, amountInWei]);
      console.log('approve tx executed', tx);
      if (!tx) {
        console.error('Approval transaction failed.');
        setPending(false);
        return;
      }

      // Keep checking the approval status
      const interval = setInterval(async () => {
        try {
          const allowance = await callMethod(chainId!, token, ERC20_ABI.ALLOWANCE, [address, spender]) as BigInt;
          if (allowance >= amountInWei) {
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
