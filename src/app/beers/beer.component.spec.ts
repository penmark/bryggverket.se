/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BeerComponent } from './beer.component';
import { Beer } from '../models';

const beer: Beer = {
  name: 'Olle',
  slug: 'olle',
  type: 'Bärs',
  image: {secure_url: '?url'},
  description: 'Öl 2000',
  abv: 10.2,
  systembolagetId: undefined
};

describe('BeerComponent', () => {
  let component: BeerComponent;
  let fixture: ComponentFixture<BeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerComponent);
    component = fixture.componentInstance;
    component.beer = beer;
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
  });
});
