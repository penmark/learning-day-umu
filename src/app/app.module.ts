import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { StartComponent } from './start/start.component';
import { NavComponent } from './nav/nav.component';
import { instaFeedReducer } from './insta-feed/insta-feed.reducer';
import { InstaFeedModule } from './insta-feed/insta-feed.module';
import { AppState } from '.';

const reducers: ActionReducerMap<AppState> = {instaFeed: instaFeedReducer};

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
    InstaFeedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 50}),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
