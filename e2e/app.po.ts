import { browser, element, by } from 'protractor';

export class BryggverketPage {
  navigateTo(path = '/') {
    return browser.get(path);
  }

  headingText() {
    return element(by.css('bv-root h1 .sr-only')).getText();
  }

  newsItems() {
    return element.all(by.css('bv-news-item'))
  }
}
