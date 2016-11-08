import { Component, Input, ChangeDetectionStrategy, style, animate, transition, trigger } from '@angular/core';
import { Observable } from 'rxjs';
import { InstaFeed } from '../insta-feed';

@Component({
  selector: 'app-insta-feed',
  templateUrl: './insta-feed.component.html',
  styleUrls: ['./insta-feed.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateX(-10%)'}),
        animate('225ms ease-out', style({opacity: 1, transform: 'translateX(0)'}))
      ]),
      transition(':leave', [style({ opacity: 1, transform: 'translateX(0)'}),
        animate('195ms ease-in', style({opacity: 0, transform: 'translateX(-10%)'}))
      ])]
    )
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstaFeedComponent {
  @Input() feed: InstaFeed;
}
