import { Chain, ChainWithDecimalId } from '@web3-onboard/common'

export const ChainConstants: {[k: string]: Chain | ChainWithDecimalId} = {
}

export function canonicalChainId(chainId: string | number) {
  if (typeof chainId === 'string') {
    if (chainId.startsWith('0x')) { 
      return parseInt(chainId, 16).toString();
    }
    return chainId;
  }
  return chainId.toString();
}


export function getChain(chainId: string) {
  if (!chainId) {
    return null;
  }
  const rv = ChainConstants[canonicalChainId(chainId)]
  if (!rv) {
    console.warn(`Chain config for ${chainId} not found`)
  }
  return rv
}

// Allow consumers to define their own web3 onboard init function. We just provide the data
const GLOBAL_PROMISES: {[k: string]: {resolver: any, data: any}} = {}
const loadOnboardPromise = new Promise((resolve,) => {
  GLOBAL_PROMISES['WEB3_ONBOARD_INIT'] = {resolver: resolve, data: null};
})

export function setWeb3OnboardInit() {
  return GLOBAL_PROMISES['WEB3_ONBOARD_INIT'].resolver;
}

export async function getWeb3OnboardInit(): Promise<any> {
  if (!GLOBAL_PROMISES['WEB3_ONBOARD_INIT'].data) {
    GLOBAL_PROMISES['WEB3_ONBOARD_INIT'].data = await loadOnboardPromise;
  } 
  return GLOBAL_PROMISES['WEB3_ONBOARD_INIT'].data;
}
