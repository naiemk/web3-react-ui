import { default as React } from 'react';
import { AppMetadata } from '@web3-onboard/common';
/**
 * Wrap your app in this component to enable wallet connection, constants preperation, and other features.
 */
export declare const AppWrapper: (props: {
    children: React.ReactNode;
    appMetadata: AppMetadata;
    providersConfigUrl: string;
    web3OnboardInitializer: (data: any) => any;
    configUrlMaps?: {
        [key: string]: string;
    };
    onError?: (error: Error) => void;
    onConfigLoaded?: (key: string, value: any) => void;
}) => import("react/jsx-runtime").JSX.Element;
