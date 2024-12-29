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
