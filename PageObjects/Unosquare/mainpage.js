var validateContactUs = {
  contactUnosquare: function(submitBtn) {
    this.api.pause(1000);
    const form = getData(); // this is the important part
    return this.waitForElementVisible('@contactusMenu', 1000)
    .click('@contactusMenu')
    .setValue('@companyTextField', form.company)
    .setValue('@phoneTextField', form.phone)
    .setValue('@messageTextArea', form.message)
    .click(submitBtn)
    .waitForElementVisible('@nameWarningMsg');
  }
};

function getData() {
  return require('../../dataExternal/unosquareForm'); // Using the correct path is important
};

var validateAboutUs = {
  aboutUnosquare: function() {
    return this.waitForElementVisible('@aboutMenu', 1000)
      .click('@aboutMenu');
  }
};

var validateBlog = {
  blogUnosquare: function(searchBtn, value) {
    return this.waitForElementVisible('@blogMenu', 1000)
      .click('@blogMenu')
      .setValue('@searchField', value)
      .click(searchBtn);
  }
};

module.exports = {
    url: 'https://www.unosquare.com',
    commands: [
      validateAboutUs,
      validateContactUs,
      validateBlog
    ],
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
