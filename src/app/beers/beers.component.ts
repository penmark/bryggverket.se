import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Beer } from '../models';

@Component({
  selector: 'bv-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersComponent {
  @Input() beers: Beer[];
}
