import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Beer } from '../models';

@Component({
  selector: 'bv-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerComponent {
  @Input() beer: Beer;

  constructor(private sanitizer: DomSanitizer) {}

  get description(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.beer.description);
  }
}
