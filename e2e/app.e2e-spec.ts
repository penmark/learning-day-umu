import { LearningDayNgPage } from './app.po';

describe('learning-day-ng App', function() {
  let page: LearningDayNgPage;

  beforeEach(() => {
    page = new LearningDayNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Lörning day!');
  });
});
