import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { StartComponent } from './start/start.component';
import { NavComponent } from './nav/nav.component';
import { instaFeedReducer } from './insta-feed/insta-feed.reducer';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    StoreModule.provideStore({instaFeed: instaFeedReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
