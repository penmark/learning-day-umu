import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { InstaFeedPage } from './insta-feed/insta-feed.page';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: StartComponent},
      {path: 'feed', loadChildren: './insta-feed/insta-feed.module#InstaFeedModule'}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
