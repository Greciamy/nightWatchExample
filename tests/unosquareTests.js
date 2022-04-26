module.exports = {
    'test unosquare contactUs' : function(browser) {
      const completeUrl = 'https://www.unosquare.com/';  
      browser
      .windowMaximize()
      .url(url)
      .assert.urlEquals(completeUrl)
      .waitForElementVisible('body')
      .click("li a[href = '/ContactUs']")
      .click("li a[href = '/Industries']")
      browser.end();
    },
  
    'test unosquare V2' : function(browser) {
      const completeUrl = 'https://www.unosquare.com/';  
      const url = 'unosquare';  
      browser
      .windowMaximize()
      .url(completeUrl)
      .assert.urlContains(url)
      .waitForElementVisible('body')
      .click("li a[href = '/ContactUs']")
      .click("li a[href = '/Industries']")
      .assert.cssProperty("li a[href = '/About']", 'font-size', '12px') // This assert is going to fail
      browser.end();
    }
  };