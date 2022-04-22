module.exports = {
    'Demo test unosquare' : function(browser) {
      const gettingStartedSelector = '#navigation a[href="https://nightwatchjs.org/guide/getting-started/"]';
      const searchSelector = '.DocSearch-Button-Placeholder';
      const searchInput = '#docsearch-input';
      const searchText = 'Asserts';
      const chooseResult = '#docsearch-item-';  
      const apiSelector = '#navbartop a[href="/api/"]';
      const blogSelector = '#navbartop a[href="https://nightwatchjs.org/blog/"]';
      const footerSelector = '.address';

      browser
        .windowMaximize()
        .url('https://nightwatchjs.org/')
        .waitForElementVisible('body')
        .click(gettingStartedSelector)
        .click(searchSelector)
        .setValue(searchInput, searchText)
        .click(chooseResult+'0')
        //.assert.textContains(apiSelector, 'API Reference') 
        .click(blogSelector)
        .moveToElement(footerSelector, 150, 150);

      browser.end();
    }
  }
