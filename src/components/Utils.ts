import { ChainConstants } from "./Types";

export class Utils {
  static addressLink(chainId: string, address: string) {
    const chain = ChainConstants[chainId];
    if (!chain) {
      return null;
    }
    return chain.blockExplorerUrl + '/address/' + address;
  }

  static transactionLink(chainId: string, txHash: string) {
    const chain = ChainConstants[chainId];
    if (!chain) {
      return null;
    }
    return chain.blockExplorerUrl + '/tx/' + txHash;
  }
}

// Rate limit detection
export const isRateLimited = (error: any): boolean => {
  if (!error?.message) return false;
  const message = error.message.toLowerCase();
  return message.includes('exceeded the rps limit') || message.includes('#rate-limits') || message.includes('retry in');
};

// Exponential backoff with jitter
export const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));

export const exponentialBackoff = async (
  fn: () => Promise<any>,
  maxRetries: number = 3,
  baseDelay: number = 100
): Promise<any> => {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (!isRateLimited(error) || attempt === maxRetries) {
        throw error;
      }
      // Exponential backoff with jitter: baseDelay * 2^attempt + random(0, 1000)
      const delayMs = baseDelay * Math.pow(2, attempt) + Math.random() * 1000;
      console.log('Rate limited, retrying...', delayMs, 'attempt', attempt);
      await delay(delayMs);
    }
  }
};
