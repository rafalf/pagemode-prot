exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../tests/*.spec.js'],

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

