import { Component, OnInit } from '@angular/core'
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { List } from 'immutable';
import { Brewer } from '../models';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './about.page.html',
})
export class AboutPage implements OnInit {
  brewers$: Observable<List<Brewer>>;
  pageTitle = 'Om Bryggverket';
  constructor(private api: ApiService, title: Title) {
    title.setTitle(`Om oss | Bryggverket`)
  }

  ngOnInit(): void {
    this.brewers$ = this.api.brewers();
  }
}
