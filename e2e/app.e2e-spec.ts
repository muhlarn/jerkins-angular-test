import { JenkinsAngularTestPage } from './app.po';

describe('jenkins-angular-test App', function() {
  let page: JenkinsAngularTestPage;

  beforeEach(() => {
    page = new JenkinsAngularTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
