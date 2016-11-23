import { Component, Input } from '@angular/core';
@Component({
  selector: 'bv-title',
  template: '<h2>{{title}}</h2>'
})
export class PageTitleComponent {
  @Input() title: string;
}
