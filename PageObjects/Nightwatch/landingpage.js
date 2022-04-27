module.exports = {
    url: 'https://nightwatchjs.org/',
    commands: [{
        gettingStarted: function() {
            return this.waitForElementVisible('@gettingStartedMenu', 1000)
                .click('@gettingStartedMenu');
        },
        search: function(input, value) {
            return this.click('@searchField')
                .setValue(input, value);
        },
        chooseFirstResult: function() {
            return this.click('@chooseFirstResult')
        }
    }],
    elements: {
        gettingStartedMenu: {
            selector: '#navigation a[href="https://nightwatchjs.org/guide/getting-started/"]'
        },
        searchField: {
            selector: '.DocSearch-Button-Placeholder'
        },
        searchInput: {
            selector: '#docsearch-input'
        },
        chooseFirstResult: {
            selector: '#docsearch-item-0'
        }
    }
};