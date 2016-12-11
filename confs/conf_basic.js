/**
 * Created with JetBrains WebStorm.
 * User: rafalfusik
 * Date: 11/12/16
 * Time: 17:37
 * To change this template use File | Settings | File Templates.
 */

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['demo.js'],

    capabilities: {
        'browserName': 'chrome'
    },

    //Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true
    }
};

