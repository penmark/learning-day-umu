import { Component, OnInit } from '@angular/core';
import { InstaFeedService } from './insta-feed.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { InstaFeed } from './insta-feed';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/combineLatest';


@Component({
  templateUrl: 'insta-feed.page.html'
})
// tslint:disable-next-line:component-class-suffix
export class InstaFeedPage implements OnInit {
  filteredFeed$: Observable<InstaFeed>;
  loading$: Observable<boolean>;
  matchCount$: Observable<number>;
  placeholder = 'Filtrera...';
  inputSubject = new Subject<string>();

  constructor(private service: InstaFeedService) {
  }

  ngOnInit() {
    this.loading$ = this.service.loading();
    const inputObservable = this.inputSubject
      .startWith('')
      .debounceTime(300);

    this.filteredFeed$ = this.service.feed()
      .combineLatest(inputObservable)
      .map(([feed, filter]) => {
        console.log('# of feed items:', feed.size, ', current filter:', filter);
        return feed.filter(item => item.caption.text.match(new RegExp(filter, 'i')) !== null) as InstaFeed;
      });
    this.matchCount$ = this.filteredFeed$.map(feed => feed.size);
  }
}
