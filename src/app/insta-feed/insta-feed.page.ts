import { Component } from '@angular/core';
import { InstaFeedService } from './insta-feed.service';
import { Subject, Observable } from 'rxjs';
import { InstaFeed } from './insta-feed';

@Component({
  templateUrl: 'insta-feed.page.html'
})
export class InstaFeedPage {
  filteredFeed$: Observable<InstaFeed>;
  loading$: Observable<boolean>;
  placeholder = 'Filtrera...';
  inputSubject = new Subject();

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
        console.log('# of feed items:', feed.length, ', current filter:', filter);
        return feed.filter(item => item.caption.text.match(new RegExp(filter, 'i')))
      })
  }
}
