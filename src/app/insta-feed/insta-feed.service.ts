import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../index';
import { InstaFeed } from './insta-feed';
import { LoadSuccess, LoadFailure, Load } from './insta-feed.reducer';


@Injectable()
export class InstaFeedService {
  constructor(private http: Http, private store: Store<AppState>) {
    this.feed()
      // Ladda ifall vi inte har några feed items
      .filter(feed => feed.length == 0)
      .do(() => store.dispatch(new Load())) // För att trigga "laddar"
      .delay(500) // Bafföratt hinna se "laddar"
      .switchMap(() => this.fetch()
        .map(feed => new LoadSuccess(feed))
        .catch(() => Observable.of(new LoadFailure()))
      )
      .subscribe(this.store)
  }

  loading(): Observable<boolean> {
    return this.store.select(s => s.instaFeed.loading)
  }
  feed(): Observable<InstaFeed> {
    return this.store
      .select(s => s.instaFeed)
      .map(i => i.feed)
  }

  private fetch(): Observable<InstaFeed> {
    return this.http.get('//api.bryggverket.se/instagram/latest')
      .map((r: Response) => r.json().images)
  }
}
