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
