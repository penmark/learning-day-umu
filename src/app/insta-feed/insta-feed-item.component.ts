import { Component, Input } from '@angular/core';
import { InstaFeedItem } from './insta-feed';

@Component({
  selector: 'app-insta-feed-item',
  templateUrl: './insta-feed-item.component.html',
  styleUrls: ['./insta-feed-item.component.scss'],

})
export class InstaFeedItemComponent {
  @Input() item: InstaFeedItem;
}
