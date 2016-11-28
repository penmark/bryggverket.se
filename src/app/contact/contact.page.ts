import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './contact.page.html',
})
export class ContactPage { // tslint:disable-line:component-class-suffix
  pageTitle = 'Kontakta Bryggverket';
  constructor(title: Title) {
    title.setTitle('Kontakta oss | Bryggverket');
  }
}
