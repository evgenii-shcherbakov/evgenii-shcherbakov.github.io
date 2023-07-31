import { FullstackPage, MobilePage } from '../pages';
import { PageQuery } from '../constants/enums';
import { AppConfig } from 'rxspa';
import { AppContext } from '../types/store';

export const getAppConfig = (location: string): AppConfig<AppContext> => {
  const pageQuery: string = (/[&?]page=([^&]+)/.exec(location)?.[0] ?? '').replace(
    /[&?]page=/gi,
    '',
  );

  const entryPage = pageQuery === PageQuery.MOBILE.toString() ? FullstackPage : FullstackPage;

  return {
    entry: entryPage,
    modals: {},
    pages: {
      [PageQuery.FULLSTACK]: FullstackPage,
      [PageQuery.MOBILE]: MobilePage,
    },
    root: document.body,
  };
};
