

var homePage = function(){

    var EC = protractor.ExpectedConditions;

    this.get = function(){
        browser.get('https://www.upwork.com/');
    };

    this.enterToFind= function(find){
        element(by.model('query')).sendKeys(find);
    };

    this.selectSearch = function(){
        element(by.css('[data-ng-controller="uiSearchController"] .button')).click();
    };

    this.selectFreelancers = function(){
        var serachFree = element(by.css('[for="search-freelancers"]'));
        browser.wait(EC.visibilityOf(serachFree), 5000);
        serachFree.click();
    };

//    this.getName = function(){
//       return element(by.binding('')).getText();
//
//    };
};

module.exports = new homePage();

