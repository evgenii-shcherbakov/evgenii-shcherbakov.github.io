import { useEffect } from 'react';
import { useHttp } from '@/features/core/hooks/use-http';

export const useTelegram = () => {
  const { Post } = useHttp();

  const buildSpyBody = () => {
    const userAgentData = (navigator as any)['userAgentData'];
    const connection = (navigator as any)['connection'];

    const nav = {
      appCodeName: navigator.appCodeName,
      appName: navigator.appName,
      appVersion: navigator.appVersion,
      connectionType: connection?.['effectiveType'],
      language: navigator.language,
      languages: Array.from(navigator.languages),
      platform: navigator.platform,
      product: navigator.product,
      userAgent: navigator.userAgent,
      userAgentData: {
        brands: userAgentData?.['brands']?.map((item: any) => ({
          brand: item?.brand,
          version: item?.version,
        })),
        mobile: userAgentData?.['mobile'],
        platform: userAgentData?.['platform'],
      },
      vendor: navigator.vendor,
    };

    return { navigator: nav, href: location.href };
  };

  useEffect(() => {
    try {
      Post(`/api/internal/telegram/spy-on-request`, { body: buildSpyBody() });
    } catch (e) {}
  }, []);
};
