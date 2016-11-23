import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  links = [
    {link: ['news'], text: 'Nyheter'},
    {link: ['beers'], text: 'Våra öl'},
    {link: ['about'], text: 'Om oss'},
    {link: ['contact'], text: 'Kontakt'},
  ]
}
