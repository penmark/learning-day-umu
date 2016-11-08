import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable, Subject } from 'rxjs';
import { InstaFeed } from './insta-feed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Lörning day!';
  data$: Observable<InstaFeed>;
  inputSubject = new Subject();

  constructor(private service: AppService) {}

  ngOnInit() {
    const inputObservable = this.inputSubject
      .asObservable()
      .startWith('')
      .debounceTime(200);

    this.data$ = this.service.instagramFeed()
      .combineLatest(inputObservable)
      .map(([feed, filter]) => {
        console.log(feed.length, filter);
        return feed.filter(item => item.caption.match(new RegExp(filter, 'i')))
      })
  }
}
