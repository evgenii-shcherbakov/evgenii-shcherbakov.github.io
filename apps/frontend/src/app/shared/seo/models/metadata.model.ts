export type WebObjectType =
  | 'website'
  | 'book'
  | 'article'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'video.other';

export type RobotsSetting =
  | 'noindex'
  | 'all'
  | 'nofollow'
  | 'none'
  | 'noarchive'
  | 'nosnippet'
  | 'notransate'
  | 'noimagesnippet'
  | string;

export type Metadata = {
  description?: string;
  robots?: RobotsSetting;
  keywords?: string[];
  siteName?: string;
  type?: WebObjectType;
};
