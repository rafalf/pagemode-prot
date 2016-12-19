describe('demo - upwork test', function() {

    var home = require('../pages/home.po.js');
    var page = require('../pages/page.po.js');
    var search = require('../pages/search.po.js')

    beforeEach(function(){
        home.get();
    });

    it('should search my name', function() {

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
