module.exports = {
  'Google advanced search: Elon Musk'(browser) {
      const mainQueryInputSelector = 'input[name="as_q"]';
      const mainQuery = 'Elon Musk';     
      const submitButtonSelector = '.jfk-button[type="submit"]';
      
      browser.url("https://www.google.com/advanced_search")
              .setValue(mainQueryInputSelector, mainQuery)
              .click(submitButtonSelector)

      browser.saveScreenshot('tests_output/google.png')
  }
};