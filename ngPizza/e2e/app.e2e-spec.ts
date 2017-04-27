import { NgPizzaPage } from './app.po';

describe('ng-pizza App', () => {
  let page: NgPizzaPage;

  beforeEach(() => {
    page = new NgPizzaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
