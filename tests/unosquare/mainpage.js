module.exports = {
    'test command example' : function(browser) {
      function getData() {
        return require('../../dataExternal/unosquareForm'); // Using the correct path is important
      };

      const searchValue = getData();
      const titleSelector = '/html/head/title[1]';
      var unosquare = browser.page.mainpage();

      unosquare
        .navigate()
        .maximizeWindow()
        .blogUnosquare()
        .useXpath()
        .assert.not.textContains({selector: titleSelector}, "Software Development Blog | Digital Transformation Blog")
        .assert.urlEquals('https://blog.unosquare.com/')
        .assert.visible({selector: "//*/label[text()='RECENT POSTS']"}, 'Recent posts')
        .assert.visible({selector: "//*/label[text()='POPULAR POSTS']"}, 'Popular posts');      
      
      searchValue.forEach(value => {
        unosquare
          .useCss()
          .searchBlogUnosquare(value);
      });
      
      unosquare
        .useCss()
        .aboutUnosquare()
        .useXpath()
        .assert.elementPresent({selector: '//*/span[text()="Mario Di Vece"]'})
        .assert.elementPresent({selector: '//*/span[text()="Giancarlo Di Vece"]'})
        .assert.elementPresent({selector: '//*/span[text()="Eduardo Arias"]'})
        .assert.elementPresent({selector: '//*/span[text()="Ignacio Miranda"]'})
        .assert.elementPresent({selector: '//*/span[text()="Diego Huerta"]'});

      browser.end();
    }
};
