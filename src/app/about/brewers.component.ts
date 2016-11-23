import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { List } from 'immutable';
import { Brewer } from '../models';

@Component({
  selector: 'bv-brewers',
  templateUrl: './brewers.component.html',
  styleUrls: ['./brewers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrewersComponent {
  @Input() brewers: List<Brewer>;
}
