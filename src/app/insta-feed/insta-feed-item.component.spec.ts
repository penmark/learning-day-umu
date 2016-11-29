/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { InstaFeedItemComponent } from './insta-feed-item.component';
import { InstaFeedItem } from './insta-feed';

describe('InstaFeedItemComponent', () => {
  let component: InstaFeedItemComponent;
  let fixture: ComponentFixture<InstaFeedItemComponent>;
  let item: InstaFeedItem = {link: 'a link', caption: {text: 'a caption'}, images: {thumbnail: {url: 'a url'}}};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaFeedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaFeedItemComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
