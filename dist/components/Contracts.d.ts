type MethodDefinition = string;
type Args = any[];
export declare const useConnectWalletSimple: () => {
    address: `0x${string}`;
    chainId: string;
};
export declare const useContracts: () => {
    callMethod: (chainId: string, contractAddr: string, definition: MethodDefinition, args: Args) => Promise<any | null>;
    execute: (contractAddr: string, definition: MethodDefinition, args: Args) => Promise<any | null>;
    error: string | null;
};
export {};
