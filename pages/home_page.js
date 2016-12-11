/**
 * Created with JetBrains WebStorm.
 * User: rafalfusik
 * Date: 11/12/16
 * Time: 16:07
 * To change this template use File | Settings | File Templates.
 */

var homePage = function(){


    this.get = function(){
        browser.get('http://www.thetestroom.com/jswebapp/');
    };

    this.enterName = function(name){
        element(by.model('person.name')).sendKeys(name);
    };

    this.selectContinue = function(){
        element(by.buttonText('CONTINUE')).click();
    };

    this.getName = function(){
       return element(by.binding('person.name')).getText();

    };
};

