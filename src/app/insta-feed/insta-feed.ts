export interface InstaImage {
  height: number;
  width: number;
  url: string;
}

export interface InstaFeedItem {
  caption: string;
  images: {
    thumbnail: InstaImage;
  },
  link: string;
}

export type InstaFeed = InstaFeedItem[];