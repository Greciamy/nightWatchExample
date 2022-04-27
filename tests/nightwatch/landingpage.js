module.exports = {
    'test nightwatch': function(browser) {
        const searchText = 'Asserts';
        const searchInput = '#docsearch-input';   
        var nightwatch = browser.page.landingpage();
        nightwatch
            .navigate()
            .maximizeWindow()
            .assert.urlEquals('https://nightwatchjs.org/')
            .gettingStarted()
            .search(searchInput, searchText)
            .assert.enabled(searchInput)
            .assert.visible(searchInput,searchText)             
            .chooseFirstResult();

        browser.assert.titleEquals('Writing Tests | Developer Guide | Nightwatch.js', 'Title is correct')

    }
};