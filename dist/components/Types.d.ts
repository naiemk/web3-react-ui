import { Chain, ChainWithDecimalId } from '@web3-onboard/common';
export declare const ChainConstants: {
    [k: string]: Chain | ChainWithDecimalId;
};
export declare function getChain(chainId: string): Chain | ChainWithDecimalId;
export declare function setWeb3OnboardInit(): any;
export declare function getWeb3OnboardInit(): Promise<any>;
