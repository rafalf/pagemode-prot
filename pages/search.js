var searchPage = function (){

    // getText - aint working
    // work around - getInnerHtml

    this.logCategories = function(){
        $('[data-log-sublocation="facets_category"]').$$('li.has-children>a').getInnerHtml().then(function(text){
            console.log(text);
        });
    };

    this.getCategories = function(){
        return $$('[data-log-sublocation="facets_category"] li.has-children>a').getInnerHtml();
    };

    this.logCategoriesWithIndex = function(){
        element.all(by.css('[data-log-sublocation="facets_category"] li.has-children>a')).each(function(element, index){
            element.getInnerHtml().then(function(text){
                console.log(index, text);
            });
        });
    };

};

module.exports = new searchPage();
