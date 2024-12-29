export interface LocalCacheOptions {
  permStore: boolean;
  timeoutSeconds: number;
}

const DEFAULT_OPTIONS: LocalCacheOptions = {
  permStore: true,
  timeoutSeconds: 3600,
};

interface CacheEntry<T> {
  value: T;
  expiration: number | null;
}

export class LocalCache {
  private cache: Map<string, CacheEntry<any>> = new Map();
  private pendingPromises: Map<string, Promise<any>> = new Map();
  private defaultOptions: LocalCacheOptions = { ...DEFAULT_OPTIONS };
  private browserStorageSupported: boolean;

  constructor() {
    this.browserStorageSupported = this.checkBrowserStorageSupport();
    if (!this.browserStorageSupported) {
      console.warn("Browser storage is not supported or blocked. Falling back to in-memory cache.");
    }
  }

  public async getAsync<T>(
    key: string,
    getter: () => Promise<T>,
    options: LocalCacheOptions = this.defaultOptions
  ): Promise<T> {
    const cachedValue = this.get<T>(key);
    if (cachedValue !== null) {
      return cachedValue;
    }

    if (this.pendingPromises.has(key)) {
      return this.pendingPromises.get(key) as Promise<T>;
    }

    const promise = (async () => {
      try {
        const result = await getter();
        this.set(key, result, options);
        return result;
      } finally {
        this.pendingPromises.delete(key);
      }
    })();

    this.pendingPromises.set(key, promise);
    return promise;
  }

  public get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (entry) {
      if (!entry.expiration || entry.expiration > Date.now()) {
        return entry.value;
      }
      this.cache.delete(key);
    }

    if (this.defaultOptions.permStore && this.browserStorageSupported) {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        const { value, expiration } = JSON.parse(storedValue);
        if (!expiration || expiration > Date.now()) {
          return value;
        }
        localStorage.removeItem(key);
      }
    }

    return null;
  }

  public setDefaultOptions(options: Partial<LocalCacheOptions>): void {
    this.defaultOptions = { ...this.defaultOptions, ...options };
  }

  public set<T>(key: string, value: T, options: LocalCacheOptions = DEFAULT_OPTIONS): void {
    const expiration = options.timeoutSeconds > 0 ? Date.now() + options.timeoutSeconds * 1000 : null;
    const entry: CacheEntry<T> = { value, expiration };

    this.cache.set(key, entry);

    if (options.permStore && this.browserStorageSupported) {
      localStorage.setItem(key, JSON.stringify(entry));
    }
  }

  private checkBrowserStorageSupport(): boolean {
    try {
      const testKey = "__localCacheTest__";
      localStorage.setItem(testKey, "test");
      localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }
}

export const GlobalCache = new LocalCache();