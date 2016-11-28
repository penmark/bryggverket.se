import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { NewsEntry } from './news';
import { List } from 'immutable';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './news.page.html',
})
export class NewsPage implements OnInit { // tslint:disable-line:component-class-suffix
  news$: Observable<List<NewsEntry>>;
  newsLoaded$: Observable<boolean>;
  pageTitle = 'Nyheter';
  constructor(private service: ApiService, title: Title) {
    title.setTitle('Nyheter | Bryggverket');
  }

  ngOnInit(): void {
    this.newsLoaded$ = this.service.newsLoaded();
    this.news$ = this.service.news();
  }
}
