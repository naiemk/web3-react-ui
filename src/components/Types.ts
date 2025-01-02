import { Chain, ChainWithDecimalId } from '@web3-onboard/common'

export const ChainConstants: {[k: string]: Chain | ChainWithDecimalId} = {
}

export function getChain(chainId: string) {
  const rv = ChainConstants[chainId]
  if (!rv) {
    console.error(`Chain config for ${chainId} not found`)
  }
  return rv
}
