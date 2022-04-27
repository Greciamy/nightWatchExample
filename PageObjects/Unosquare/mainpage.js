var validateAboutUs = {
  aboutUnosquare: function() {
    return this.waitForElementVisible('@aboutMenu', 1000)
      .click('@aboutMenu');
  }
};

var validateBlog = {
  blogUnosquare: function() {
    return this.waitForElementVisible('@blogMenu', 1000)
      .click('@blogMenu');
  }
};

var searchBlog = {
  searchBlogUnosquare: function(value) {  
      return this.waitForElementVisible('@searchField', 1000)
      .setValue('@searchField', value.search)
      .click('@searchBtn');
  }  
}

module.exports = {
    url: 'https://www.unosquare.com',
    commands: [
      validateAboutUs,
      validateBlog,
      searchBlog
    ],
    elements: {
      contactusMenu: {
        selector: "li a[href = '/ContactUs']"
      },
      industriesMenu: {
        selector: "li a[href = '/Industries']"
      },
      aboutMenu: {
        selector: "li a[href = 'https://www.unosquare.com/About']"
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
      },
      searchBtn: {
        selector: ".search-icon"
      }
    }
};
