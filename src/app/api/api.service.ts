import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {
  LoadNewsAction, NewsLoadedAction, ActionTypes, BeersLoadedAction, LoadBeersAction,
  LoadContactsAction, ContactsLoadedAction
} from './api.actions';
import { NewsEntry } from '../news/news';
import { AppState } from './api.reducer';
import { List } from 'immutable';
import { environment } from '../../environments/environment';
import { Brewer, Beer } from '../models';

const API_URL = environment.API_URL;

@Injectable()
export class ApiService {
  @Effect()
  loadNews$: Observable<Action> = this.actions$
    .ofType(ActionTypes.LOAD_NEWS)
    .startWith(new LoadNewsAction())
    .switchMap((action?: Action) => this.loadNews()
      .map(news => new NewsLoadedAction(news))
    );
  @Effect()
  loadBeers$: Observable<Action> = this.actions$
    .ofType(ActionTypes.LOAD_BEERS)
    .startWith(new LoadBeersAction())
    .switchMap((action?: Action) => this.loadBeers()
      .map(news => new BeersLoadedAction(news))
    );
  @Effect()
  loadContacts$: Observable<Action> = this.actions$
    .ofType(ActionTypes.LOAD_CONTACTS)
    .startWith(new LoadContactsAction())
    .switchMap((action?: Action) => this.loadBrewers()
      .map(contacts => new ContactsLoadedAction(contacts))
    );

  constructor(private actions$: Actions, private http: Http, private store: Store<AppState>) {}

  news(): Observable<List<NewsEntry>> {
    return this.store.select(s => s.api.newsItems);
  }

  newsLoaded(): Observable<boolean> {
    return this.news()
      .map(news => !news.isEmpty());
  }

  beers(): Observable<List<Beer>> {
    return this.store.select(s => s.api.beers);
  }

  beersLoaded(): Observable<boolean> {
    return this.beers()
      .map(beers => !beers.isEmpty());
  }

  brewers(): Observable<List<Brewer>> {
    return this.store.select(s => s.api.brewers);
  }

  loadNews(): Observable<NewsEntry[]> {
    return this.http.get(`${API_URL}/instagram`)
      .map(r => r.json());
  }

  loadBeers(): Observable<Beer[]> {
    return this.http.get(`${API_URL}/beers`)
      .map(r => r.json());
  }

  loadBrewers(): Observable<Brewer[]> {
    return this.http.get(`${API_URL}/brewers`)
      .map(r => r.json());
  }
}
