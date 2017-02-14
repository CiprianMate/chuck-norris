import { ChuckNorrisPage } from './app.po';

describe('chuck-norris App', function() {
  let page: ChuckNorrisPage;

  beforeEach(() => {
    page = new ChuckNorrisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
