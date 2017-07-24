import { BasicRepoPage } from './app.po';

describe('basic-repo App', () => {
  let page: BasicRepoPage;

  beforeEach(() => {
    page = new BasicRepoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
