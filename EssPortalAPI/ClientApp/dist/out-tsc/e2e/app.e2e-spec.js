import { NgEgretPage } from './app.po';
describe('ng-egret App', () => {
    let page;
    beforeEach(() => {
        page = new NgEgretPage();
    });
    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map