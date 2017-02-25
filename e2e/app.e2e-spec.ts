import { ContactsChaoPage } from './app.po';

describe('contacts-chao App', () => {
  let page: ContactsChaoPage;

  beforeEach(() => {
    page = new ContactsChaoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
