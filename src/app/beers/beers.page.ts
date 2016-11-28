import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { List } from 'immutable';
import { Title } from '@angular/platform-browser';
import { Beer } from '../models';

@Component({
  templateUrl: './beers.page.html',
  styleUrls: ['./beers.page.scss'],
})
export class BeersPage implements OnInit { // tslint:disable-line:component-class-suffix
  beers$: Observable<List<Beer>>;
  beersLoaded$: Observable<boolean>;
  pageTitle = 'Bryggverkets öl';
  constructor(private apiService: ApiService, title: Title) {
    title.setTitle(`Våra öl | Bryggverket`);
  }

  ngOnInit(): void {
    this.beers$ = this.apiService.beers()
      .map(beers => <List<Beer>>beers.sortBy(beer => beer.name));
    this.beersLoaded$ = this.apiService.beersLoaded();
  }

}
