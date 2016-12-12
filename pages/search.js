var searchPage = function (){

    // getText - aint working
    // work around - getInnerHtml
    this.logCatagegories = function(){
        $('[data-log-sublocation="facets_category"]').$$('li.has-children>a').getInnerHtml().then(function(text){
            console.log(text);
        });
    };

};

module.exports = new searchPage();
