describe('demo test', function() {

    var home = require('../pages/home.js');
    var page = require('../pages/page.js');
    var search = require('../pages/search.js')

    beforeEach(function(){
        home.get();
    });

    it('search my name', function() {

        home.selectSearch();

        home.selectFreelancers();

        home.enterToFind('rafalfusik');

        page.sendEnter();

        expect(browser.getCurrentUrl()).toContain('q=rafalfusik');

        var searched = $('.jsShortName').getText();
        expect(searched).toBe('Rafal Fusik');

        search.logCategories();

        search.logCategoriesWithIndex();

        expect(search.getCategories().count()).toBe(12);

//        browser.pause();
    });
});
