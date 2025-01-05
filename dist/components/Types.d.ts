import { Chain, ChainWithDecimalId } from '@web3-onboard/common';
export interface Token {
    chainId: string;
    address: string;
    decimals: number;
    symbol: string;
    name: string;
    logoURI: string;
    isNative: boolean;
}
export declare const ChainConstants: {
    [k: string]: Chain | ChainWithDecimalId;
};
export declare function canonicalAddress(address: string): string | null;
export declare function canonicalChainId(chainId: string | number): string | null;
export declare function getChain(chainId: string): Chain | ChainWithDecimalId | null;
export declare function setWeb3OnboardInit(): any;
export declare function getWeb3OnboardInit(): Promise<any>;
