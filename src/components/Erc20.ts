import { useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';
import { ChainConstants } from './Types';

interface TokenData {
  name: string;
  symbol: string;
  decimals: number;
}

const tokenCache: { [address: string]: TokenData } = {};

export function useErc20(tokenAddress: string, chainId: string) {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!tokenAddress || !chainId) return;

    const fetchTokenData = async () => {
      try {
        // Check cache first
        if (tokenCache[tokenAddress]) {
          setTokenData(tokenCache[tokenAddress]);
          return;
        }

        const chainConfig = ChainConstants[chainId];
        if (!chainConfig || !chainConfig.rpcUrl) {
          setError('Invalid chain configuration');
          return;
        }

        const provider = new ethers.JsonRpcProvider(chainConfig.rpcUrl);
        const contract = new ethers.Contract(tokenAddress, [
          'function name() view returns (string)',
          'function symbol() view returns (string)',
          'function decimals() view returns (uint8)'
        ], provider);

        const [name, symbol, decimals] = await Promise.all([
          contract.name(),
          contract.symbol(),
          contract.decimals()
        ]);

        const data = { name, symbol, decimals };
        tokenCache[tokenAddress] = data;
        setTokenData(data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch token data.');
      }
    };

    fetchTokenData();
  }, [tokenAddress, chainId]);

  const toMachineReadable = useCallback(
    (amount: string | number) => {
      if (!tokenData) {
        console.warn('Token data is not loaded yet. Returning null.');
        return null;
      }

      return ethers.parseUnits(amount.toString(), tokenData.decimals);
    },
    [tokenData]
  );

  return { tokenData, error, toMachineReadable };
}
