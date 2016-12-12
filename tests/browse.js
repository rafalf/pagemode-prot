describe('demo test', function() {

    var homePage = require('../pages/home.js');
    var page = require('../pages/page.js');

    beforeEach(function(){
        homePage.get();
    });

    it('search my name', function() {

        homePage.selectSearch();

        homePage.selectFreelancers();

        homePage.enterToFind('rafalfusik');

        page.sendEnter();

        expect(browser.getCurrentUrl()).toContain('q=rafalfusik');

        var searched = element(by.css('.jsShortName')).getText();
        expect(searched).toBe('Rafal Fusik');

//        browser.pause();
    });
});
