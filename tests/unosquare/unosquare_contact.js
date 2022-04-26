module.exports = {
    'Demo test unosquare' : function(browser) {
      const visibleImage = '.main-hero';
      const titlePage = 'Digital Transformation Services | Agile Staffing Solutions | Unosquare';
      const url = 'unosquare';
      const completeUrl = 'https://www.unosquare.com/';
      const contactSelector = '#navbarSupportedContent a[href="/ContactUs"]';

      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .assert.visible(visibleImage, 'Image is visible')
      .assert.titleEquals(titlePage)
      .assert.urlContains(url)
      .assert.urlEquals(completeUrl)
      .click(contactSelector)
      browser.end();
    }
  }
