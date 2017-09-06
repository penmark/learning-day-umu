import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Store } from '@ngrx/store';
import { AppState } from '../index';
import { InstaFeed } from './insta-feed';
import { LoadSuccess, LoadFailure, Load } from './insta-feed.reducer';


@Injectable()
export class InstaFeedService {
  constructor(private http: Http, private store: Store<AppState>) {
    store.dispatch(new Load());
    this.feed()
      // Ladda bara ifall vi inte har några feed items
      .filter(feed => feed && feed.size === 0)
      .delay(500) // Bafföratt hinna se "laddar"
      .switchMap(() => this.fetch()
        .map(feed => new LoadSuccess(feed))
        .catch(() => Observable.of(new LoadFailure()))
      )
      .subscribe(this.store);
  }

  loading(): Observable<boolean> {
    return this.store.select(s => s.instaFeed.loading);
  }

  feed(): Observable<InstaFeed> {
    return this.store
      .select(s => s.instaFeed)
      .map(i => i.feed);
  }

  private fetch(): Observable<InstaFeed> {
    return this.http.get('https://api.bryggverket.se/instagram?count=20')
      .map((r: Response) => r.json());
  }
}
