module.exports = {
    url: 'https://www.unosquare.com',
    commands: [{
      aboutUnosquare: function() {
        return this.waitForElementVisible('@aboutMenu', 1000)
          .click('@aboutMenu');
      },
      contactUnosquare: function(submitBtn) {
        return this.waitForElementVisible('@contactusMenu', 1000)
        .click('@contactusMenu')
        .setValue('@companyTextField', 'QA CoE course')
        .setValue('@phoneTextField', '3300000000')
        .setValue('@messageTextArea', 'This is a Random Text used in a Course')
        .click(submitBtn)
        .waitForElementVisible('@nameWarningMsg');
      },
      blogUnosquare: function(searchBtn, value) {
        return this.waitForElementVisible('@blogMenu', 1000)
          .click('@blogMenu')
          .setValue('@searchField', value)
          .click(searchBtn);
      }
    }],
    elements: {
      contactusMenu: {
        selector: "li a[href = '/ContactUs']"
      },
      industriesMenu: {
        selector: "li a[href = '/Industries']"
      },
      aboutMenu: {
        selector: "li a[href = '/About']"
      },
      servicesMenu: {
        selector: "li a[href = '/Services']"
      },
      blogMenu: {
        selector: "li a[href = 'https://blog.unosquare.com']"
      },
      companyTextField: {
        selector: "input.hs-input[name = 'company']"
      },
      phoneTextField: {
        selector: "input.hs-input[name = 'phone']"
      },
      messageTextArea: {
        selector: "textarea.hs-input[name = 'message']"
      },
      nameWarningMsg: {
        selector: "//div[contains(@class, 'hs_name')]//label[contains(., 'Please complete this required field.')]",
        locateStrategy: 'xpath'
      },
      searchField: {
        selector: "#search-bar"
      }
    }
};
