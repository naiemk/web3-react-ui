export interface LocalCacheOptions {
    permStore: boolean;
    timeoutSeconds: number;
}
export declare class LocalCache {
    private cache;
    private pendingPromises;
    private defaultOptions;
    private browserStorageSupported;
    constructor();
    getAsync<T>(key: string, getter: () => Promise<T>, options?: LocalCacheOptions): Promise<T>;
    get<T>(key: string): T | null;
    setDefaultOptions(options: Partial<LocalCacheOptions>): void;
    set<T>(key: string, value: T, options?: LocalCacheOptions): void;
    private checkBrowserStorageSupport;
}
export declare const GlobalCache: LocalCache;
