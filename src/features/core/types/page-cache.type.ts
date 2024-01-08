import FileSystemCache from 'next/dist/server/lib/incremental-cache/file-system-cache';

export type PageIncrementalCache = Partial<{
  dev: boolean;
  minimalMode: boolean;
  requestHeaders: Partial<{
    host: string;
    connection: string;
    'sec-ch-ua': string;
    'next-router-state-tree': string;
    'sec-ch-ua-mobile': string;
    'user-agent': string;
    'next-url': string;
    rsc: string;
    'sec-ch-ua-platform': string;
    accept: string;
    'sec-fetch-site': string;
    'sec-fetch-mode': string;
    'sec-fetch-dest': string;
    referer: string;
    'accept-encoding': string;
    'accept-language': string;
    'x-middleware-invoke': string;
    'x-invoke-path': string;
    'x-invoke-query': string;
    'x-forwarded-host': string;
    'x-forwarded-port': string;
    'x-forwarded-proto': string;
    'x-forwarded-for': string;
    'x-invoke-output': string;
  }>;
  requestProtocol: string;
  allowedRevalidateHeaderKeys: string;
  prerenderManifest: Partial<{
    version: number;
    routes: {};
    dynamicRoutes: {};
    notFoundRoutes: string[];
    preview: Partial<{
      previewModeId: string;
      previewModeSigningKey: string;
      previewModeEncryptionKey: string;
    }>;
  }>;
  fetchCacheKeyPrefix: string;
  cacheHandler: FileSystemCache;
}>;
