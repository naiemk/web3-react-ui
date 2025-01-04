import { Chain, ChainWithDecimalId } from '@web3-onboard/common';
export declare const ChainConstants: {
    [k: string]: Chain | ChainWithDecimalId;
};
export declare function getChain(chainId: string): Chain | ChainWithDecimalId;
