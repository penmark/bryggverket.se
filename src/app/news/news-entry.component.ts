import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NewsEntry } from './news';

@Component({
  selector: 'bv-news-item',
  templateUrl: './news-entry.component.html',
  styleUrls: ['./news-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsEntryComponent {
  @Input() item: NewsEntry;
}
