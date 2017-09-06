import { List } from 'immutable';

export interface InstaImage {
  height?: number;
  width?: number;
  url: string;
}

export interface InstaFeedItem {
  caption: {text: string};
  images: {
    thumbnail: InstaImage;
  };
  link: string;
}

export type InstaFeed = List<InstaFeedItem>;
