import { SecurityAppPage } from './app.po';

describe('security-app App', () => {
  let page: SecurityAppPage;

  beforeEach(() => {
    page = new SecurityAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
