import { Action } from '@ngrx/store';
import { NewsEntry } from '../news/news';
import { Beer, Brewer } from '../models';

export const ActionTypes = {
  LOAD_NEWS: '[api] Load news',
  LOADED_NEWS: '[api] Loaded news',
  LOAD_BEERS: '[api] Load beers',
  BEERS_LOADED: '[api] Loaded beers',
  LOAD_CONTACTS: '[api] Load contacts',
  CONTACTS_LOADED: '[api] Loaded contacts'
};

export class LoadNewsAction implements Action {
  type = ActionTypes.LOAD_NEWS;
  payload: undefined;
}
export class NewsLoadedAction implements Action {
  type = ActionTypes.LOADED_NEWS;

  constructor(public payload: NewsEntry[]) {
  }
}

export class LoadBeersAction implements Action {
  type = ActionTypes.LOAD_BEERS;
  payload: undefined;
}
export class BeersLoadedAction implements Action {
  type = ActionTypes.BEERS_LOADED;

  constructor(public payload: Beer[]) {
  }
}

export class LoadContactsAction implements Action {
  type = ActionTypes.LOAD_CONTACTS;
  payload: undefined;
}
export class ContactsLoadedAction implements Action {
  type = ActionTypes.CONTACTS_LOADED;

  constructor(public payload: Brewer[]) {
  }
}

export type BvAction = LoadNewsAction | NewsLoadedAction | LoadBeersAction | BeersLoadedAction | LoadContactsAction | ContactsLoadedAction;
