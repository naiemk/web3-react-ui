export declare class Utils {
    static addressLink(chainId: string, address: string): string | null;
    static transactionLink(chainId: string, txHash: string): string | null;
}
export declare const isRateLimited: (error: any) => boolean;
export declare const delay: (ms: number) => Promise<void>;
export declare const exponentialBackoff: (fn: () => Promise<any>, maxRetries?: number, baseDelay?: number) => Promise<any>;
