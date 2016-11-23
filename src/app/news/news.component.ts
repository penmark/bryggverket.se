import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NewsEntry } from './news';


@Component({
  selector: 'bv-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent {
  @Input() news: NewsEntry[];
  constructor() {
  }
}
