import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: StartComponent},
      {path: 'feed', loadChildren: 'app/insta-feed/insta-feed.module#InstaFeedModule'}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
