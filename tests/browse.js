describe('demo test', function() {

    // Pages
    var home = require('../pages/home.js');
    var page = require('../pages/page.js');
    var search = require('../pages/search.js');

    beforeEach(function(){
        console.log('\nStart test ---->')
    });

    afterEach(function () {
        console.log('\nComplete test ---->')
    });

    it('search my name', function() {

        home.get();

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

    it ('read json file', function(){
        var rjson = require('../utils/sample.json');
        console.log(rjson);
    });
});
