type MethodDefinition = string;
type Args = any[];
export declare const useConnectWalletSimple: () => {
    address: string | null;
    addressDisplay: `0x${string}`;
    chainId: string | null;
};
export declare const useContracts: () => {
    callMethod: (chainId: string, contractAddr: string, definition: MethodDefinition, args: Args) => Promise<any | null>;
    execute: (contractAddr: string, definition: MethodDefinition, args: Args, options?: {
        wait?: boolean;
        gasLimit?: number;
        gasPrice?: BigInt;
        value?: BigInt;
    }) => Promise<any | null>;
    error: string | null;
};
export {};
