import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './contact.page.html',
})
export class ContactPage {
  constructor(title: Title) {
    title.setTitle('Kontakta oss | Bryggverket');
  }
}
