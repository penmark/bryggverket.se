/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsEntryComponent } from './news-entry.component';
import { NewsEntry } from './news';

const item: NewsEntry = {
  caption: {text: 'blah'},
  link: 'www',
  images: {standard_resolution: {url: '?www.image'}}
};

describe('NewsEntryComponent', () => {
  let component: NewsEntryComponent;
  let fixture: ComponentFixture<NewsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsEntryComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
  });
});
