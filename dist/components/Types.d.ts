import { Chain, ChainWithDecimalId } from '@web3-onboard/common';
export declare const ChainConstants: {
    [k: string]: Chain | ChainWithDecimalId;
};
export declare function canonicalChainId(chainId: string | number): string;
export declare function getChain(chainId: string): Chain | ChainWithDecimalId | null;
export declare function setWeb3OnboardInit(): any;
export declare function getWeb3OnboardInit(): Promise<any>;
