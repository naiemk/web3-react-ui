import { ContractTransactionResponse, ethers } from 'ethers';
import { useConnectWallet } from '@web3-onboard/react';
import { canonicalAddress, canonicalChainId, ChainConstants } from './Types';
import { useState, useCallback } from 'react';
import { Chain } from '@web3-onboard/common'

type MethodDefinition = string;
type Args = any[];

export const useConnectWalletSimple = () => {
  const [{ wallet }] = useConnectWallet();
  const address = (wallet?.accounts || [])[0]?.address;
  let chainId = canonicalChainId((wallet?.chains || [])[0]?.id);
  return {
    address: canonicalAddress(address),
    addressDisplay: address,
    chainId
  };
}

export const useContracts = () => {
  const [{ wallet }] = useConnectWallet();
  const [error, setError] = useState<string | null>(null);

  const callMethod = useCallback(
    async (
      chainId: string,
      contractAddr: string,
      definition: MethodDefinition,
      args: Args
    ): Promise<any | null> => {
      setError(null); // Reset error state
      try {
        const chain = ChainConstants[chainId] as Chain;
        if (!chain) {
          setError(`Chain with ID ${chainId} not found in ChainConstants.`);
          return null;
        }

        const provider = new ethers.JsonRpcProvider(chain.rpcUrl);
        const contract = new ethers.Contract(contractAddr, [definition], provider);

        const methodName = definition.split('(')[0].split(' ')[1].trim();
        if (!(methodName in contract)) {
          setError(`Method ${methodName} not found in contract.`);
          return null;
        }

        return await contract[methodName](...args);
      } catch (err: any) {
        console.error('Error calling method:', err);
        setError(err.message);
        return null;
      }
    },
    []
  );

  const execute = useCallback(
    async (
      contractAddr: string,
      definition: MethodDefinition,
      args: Args,
      options?: {
        wait?: boolean;
        gasLimit?: number;
        gasPrice?: BigInt;
        value?: BigInt;
      },
    ): Promise<any | null> => {
      setError(null); // Reset error state
      try {
        if (!wallet?.provider) {
          setError('No wallet connected. Please connect your wallet.');
          return null;
        }

        const provider = new ethers.BrowserProvider(wallet.provider);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddr, [definition], signer);

        const methodName = definition.split('(')[0].split(' ')[1].trim();
        if (!(methodName in contract)) {
          setError(`Method ${methodName} not found in contract.`);
          return null;
        }
        console.log('About to execute', {contractAddr, methodName, definition, args, options});
        const transaction = await contract[methodName](...args, options || {}) as ContractTransactionResponse;
        if (options?.wait) { await transaction.wait(); } // Wait for the transaction to be mined
        return transaction;
      } catch (err: any) {
        console.error('Error executing method:', err);
        setError(err.message);
        return null;
      }
    },
    [wallet]
  );

  return { callMethod, execute, error };
};
