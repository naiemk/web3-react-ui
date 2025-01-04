import { default as React, ReactElement } from 'react';
type ApprovableButtonProps = {
    chainId: string;
    token: string;
    amount: string;
    spender: string;
    approveButton: (onApprove: () => void, pending: boolean) => ReactElement;
    actionButton: ReactElement;
    unknownState: ReactElement;
};
/**
 * ApprovableButton - A meta component that determines if approval is required for a transaction
 * and renders either an approve button, an action button, or an unknown state.
 *
 * @param {ApprovableButtonProps} props - Props for the component.
 */
export declare const ApprovableButton: React.ComponentType<ApprovableButtonProps>;
export {};
