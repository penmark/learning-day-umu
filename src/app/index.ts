import { InstaFeedState } from './insta-feed/insta-feed.reducer';
export * from './app.component';
export * from './app.module';

export interface AppState {
  instaFeed: InstaFeedState;
}
