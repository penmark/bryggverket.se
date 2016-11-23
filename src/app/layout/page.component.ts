import { Component, Input, style, animate, transition, trigger, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bv-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  animations: [
    trigger('fadeInOutLeft', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateX(-10%)'}),
        animate('225ms ease-out', style({opacity: 1, transform: 'translateX(0)'}))
      ]),
      transition(':leave', [style({opacity: 1, transform: 'translateX(0)'}),
        animate('195ms ease-in', style({opacity: 0, transform: 'translateX(-10%)'}))
      ])]
    ),
    trigger('fadeInRight', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateX(20%)'}),
        animate('225ms ease-out', style({opacity: 1, transform: 'translateX(0)'}))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent {
  @Input() title: string;
}
