import { BryggverketPage } from './app.po';

describe('bryggverket App', function() {
  let page: BryggverketPage;

  beforeEach(() => {
    page = new BryggverketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
