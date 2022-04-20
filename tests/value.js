this.demoTest = function (browser) {
    browser.assert.value("form.login input[type=text]", "username");
  };