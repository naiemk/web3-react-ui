export declare const NATIVE_TOKEN_ADDRESS = "0x0000000000000000000000000000000000000001";
interface TokenData {
    name: string;
    symbol: string;
    decimals: number;
}
export declare function useErc20(tokenAddress?: string, chainId?: string): {
    tokenData: TokenData | null;
    error: string | null;
    toMachineReadable: (amount: string | number) => bigint | null;
    toHumanReadable: (amount: string | number) => string | null;
};
export declare const ERC20_ABI: {
    BALANCE_OF: string;
    ALLOWANCE: string;
    TRANSFER: string;
    TRANSFER_FROM: string;
    APPROVE: string;
    DECIMALS: string;
    NAME: string;
    SYMBOL: string;
};
export {};
