module.exports = {
    'test command example' : function(browser) {
      const aboutTitle = 'h2';
      const submitForm = 'input[value = "Submit"]';
      const textSearch = 'Scrum';
      const searchBtn = '.search-icon';
      const moreBtn = '.more-link';
      const resultsTitle = '.results-title';
      var unosquare = browser.page.mainpage();

      unosquare
      .navigate()
      .maximizeWindow()
      .assert.urlEquals('https://www.unosquare.com/')
      .assert.titleEquals('Digital Transformation Services | Agile Staffing Solutions | Unosquare', 'Title is correct')
      .aboutUnosquare()
      .assert.textContains(aboutTitle, 'OUR VALUES')
      .contactUnosquare(submitForm)
      .assert.cssProperty(submitForm, '-webkit-appearance', 'button')
      .blogUnosquare(searchBtn, textSearch)
      .assert.not.cssProperty(searchBtn, 'display', 'inline')
      .assert.attributeContains(moreBtn, 'href', 'https://blog.unosquare.com/scrum-product-backlog-what-is-it-and-how-to-maintain-one')
      .assert.not.containsText(resultsTitle, 'RESULTS FOUND FOR THE SEARCH TERM');
      browser.end();
    }
};
