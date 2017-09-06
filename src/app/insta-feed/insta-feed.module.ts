import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InstaFeedPage } from './insta-feed.page';
import { InstaFeedItemComponent } from './insta-feed-item.component';
import { InstaFeedComponent } from './insta-feed.component';
import { CommonModule } from '@angular/common';
import { InstaFeedService } from './insta-feed.service';


@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: InstaFeedPage}
    ]),
    CommonModule,
  ],
  declarations: [
    InstaFeedPage,
    InstaFeedComponent,
    InstaFeedItemComponent
  ],
  providers: [
    InstaFeedService
  ]
})
export class InstaFeedModule {}
