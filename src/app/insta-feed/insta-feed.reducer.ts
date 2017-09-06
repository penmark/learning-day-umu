import { Action, ActionReducer } from '@ngrx/store';
import { InstaFeed } from './insta-feed';
import { List } from 'immutable';

export const InstaFeedActionTypes = {
  LOAD: '[insta-feed] Load',
  LOAD_SUCCESS: '[insta-feed] Load success',
  LOAD_FAILURE: '[insta-feed] Load failure'
};

export class Load implements Action {
  type = InstaFeedActionTypes.LOAD;
  payload = undefined;
}

export class LoadSuccess implements Action {
  type = InstaFeedActionTypes.LOAD_SUCCESS;

  constructor(public payload: InstaFeed) {
  }
}

export class LoadFailure implements Action {
  type = InstaFeedActionTypes.LOAD_FAILURE;
  payload = undefined;
}

export type InstaFeedAction = Load | LoadSuccess | LoadFailure;

export interface InstaFeedState {
  feed: InstaFeed;
  filtered: InstaFeed;
  loading: boolean;
}

const initialState: InstaFeedState = {
  feed: List(),
  filtered: List(),
  loading: false
};

export function instaFeedReducer(state = initialState, {type, payload}: InstaFeedAction): InstaFeedState {
  switch (type) {
    case InstaFeedActionTypes.LOAD: {
      return Object.assign({}, state, {loading: true});
    }
    case InstaFeedActionTypes.LOAD_SUCCESS: {
      return Object.assign({}, state, {feed: List(payload), loading: false});
    }
    case InstaFeedActionTypes.LOAD_FAILURE: {
      return Object.assign({}, state, {feed: List(), loading: false});
    }
    default:
      return state;
  }
}
