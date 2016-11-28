import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { BvAction, ActionTypes } from './api.actions';
import { NewsEntry } from '../news/news';
import { Beer, Brewer } from '../models';
import { environment } from '../../environments/environment';
import { List } from 'immutable';

export interface ApiState {
  newsItems: List<NewsEntry>;
  beers: List<Beer>;
  brewers: List<Brewer>;
}

export interface AppState {
  api: ApiState;
}

const initialState: ApiState = {
  newsItems: List<NewsEntry>(),
  beers: List<Beer>(),
  brewers: List<Brewer>(),
};

export const apiReducer: ActionReducer<any> = (state: ApiState = initialState, action: BvAction) => {
  switch (action.type) {
    case ActionTypes.LOADED_NEWS:
      return Object.assign({}, state, {newsItems: List(action.payload)});
    case ActionTypes.BEERS_LOADED:
      return Object.assign({}, state, {beers: List(action.payload)});
    case ActionTypes.CONTACTS_LOADED:
      return Object.assign({}, state, {brewers: List(action.payload)});
    default:
      return state;
  }
};

const reducers = {
  api: apiReducer
};

const devReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const prodReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(action: any, state: any) {
  return environment.production ? prodReducer(action, state) : devReducer(action, state);
}
