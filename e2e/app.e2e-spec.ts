import { BryggverketPage } from './app.po';

describe('Bryggverket App', function() {
  let page: BryggverketPage;

  beforeEach(() => {
    page = new BryggverketPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.headingText()).toEqual('Bryggverket');
  });

  it('should display news', () => {
    page.navigateTo('/news');
    expect(page.newsItems().count()).toEqual(9);
  })
});
