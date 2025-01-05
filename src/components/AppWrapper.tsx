import React, { useEffect, useState } from "react";
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
// import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'
import trustModule from '@web3-onboard/trust'
import { AppMetadata, Chain, ChainWithDecimalId } from '@web3-onboard/common'
import { ChainConstants, setWeb3OnboardInit } from "./Types";
import { GlobalCache } from "./LocalCache";

const injected = injectedModule()
const coinbase = coinbaseModule()
// const walletConnectOptions = {}
// const walletConnect = walletConnectModule(walletConnectOptions)
const trust = trustModule()

const wallets = [
  injected,
  trust,
  coinbase,
  // walletConnect,
]

/**
 * Wrap your app in this component to enable wallet connection, constants preperation, and other features.
 */
export const AppWrapper = (props: {
  children: React.ReactNode,
  appMetadata: AppMetadata,
  providersConfigUrl: string,
  configUrlMaps?: { [key: string]: string },
  onError?: (error: Error) => void,
  onConfigLoaded?: (key: string, value: any) => void,
}) => {
  const [chains, setChains] = useState<(Chain | ChainWithDecimalId)[] | null>(null)
  const [web3Onboard, setWeb3Onboard] = useState<any>(null)

  useEffect(() => {
    if (chains) {
      console.log('Chains loaded:', chains)
      const w3oInitData = ({
        wallets,
        chains,
        appMetadata: props.appMetadata,
        connect: {
          autoConnectLastWallet: true
        },
        accountCenter: {
            desktop: {
              enabled: false
            },
            mobile: {
              enabled: false
            }
          }
        });
      
      const w3o = init(w3oInitData);
      setWeb3OnboardInit()(w3oInitData);
      setWeb3Onboard(w3o)
    }
  }, [chains])

  useEffect(() => {
    const loadConfig = async () => {
      try {
        if (props.providersConfigUrl) {
            const providersJson = await GlobalCache.getAsync('URLS_' + props.providersConfigUrl, async () => {
              const providers = await fetch(props.providersConfigUrl)
              return await providers.json()
            });
            if (providersJson) {
                setChains(providersJson as any);
              (providersJson as any[] || []).forEach((chain: Chain | ChainWithDecimalId) => {
                ChainConstants[chain.id.toString()] = chain
              })
              props.onConfigLoaded && props.onConfigLoaded('providers', providersJson)
            }
        }
        for (const [key, url] of Object.entries(props.configUrlMaps || {})) {
          const configJson = await GlobalCache.getAsync('CONFIG_' + url, async () => {
            const config = await fetch(url)
            return await config.json()
          });
          if (configJson) {
              props.onConfigLoaded && props.onConfigLoaded(key, configJson)
          }
        }
      } catch (e) {
        console.error('Error loading configs', e)
        props.onError && props.onError(e as Error)
      }
    }
    loadConfig()
  }, [props.configUrlMaps, props.providersConfigUrl, props.onConfigLoaded])

  if (web3Onboard) {
    return (
      <Web3OnboardProvider web3Onboard={web3Onboard as any}>
        {props.children}
      </Web3OnboardProvider>
    )
  }

  return (
    <>
      {props.children}
    </>
  );
};
