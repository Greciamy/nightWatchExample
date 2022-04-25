module.exports = {
    'Demo test unosquare' : function(browser) {
      const gettingStartedSelector = '#navigation a[href="https://nightwatchjs.org/guide/getting-started/"]';
      const gettingStartedTitle = 'Developer Guide | Nightwatch.js';
      const searchSelector = '.DocSearch-Button-Placeholder';
      const searchInput = '#docsearch-input';
      const searchText = 'Asserts';
      const chooseResult = '#docsearch-item-';  
      const apiSelector = '#navbartop a[href="/api/"]';
      const blogSelector = '#navbartop a[href="https://nightwatchjs.org/blog/"]';
      const footerSelector = '.address';
      const footerText = 'Nightwatch.js was created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained by all these fine people with help from all our contributors.';

      browser
        .windowMaximize()
        .url('https://nightwatchjs.org/')
        .assert.urlContains('nightwatchjs.org')
        .waitForElementVisible('body')
        .click(gettingStartedSelector)
        .assert.titleEquals(gettingStartedTitle, 'Title is correct')
        .click(searchSelector)
        .setValue(searchInput, searchText)
        .assert.visible(searchInput, 'Text is visible')
        .click(chooseResult+'0')
        .assert.textContains(apiSelector, 'API') 
        .click(blogSelector)
        .getLocation(footerSelector, function(){
          this.assert.visible(footerSelector);
          this.moveToElement(footerSelector, 0,0);
        });
      browser.assert.textContains(footerSelector, footerText, 'Footer contains text');
      browser.end();
    }
  }
