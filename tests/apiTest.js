module.exports = {
    before: function (browser) {
        browser.globals.waitForConditionTimeout = 7000
    },

    'API Testing - GET Positive': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=VkziixA94PZX2DqhQS5VHZ6lSqtKhfX1SdWmU1UQ'
        browser.apiGet(apiUrl, function (response) {
            var data = JSON.parse(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(data.media_type, 'image')
            browser.assert.equal(data.service_version, 'v1')
        })
    },

    'API Testing - GET Positive': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=VkziixA94PZX2DqhQS5VHZ6lSqtKhfX1SdWmU1UQ'
        browser.apiGet(apiUrl, function (response) {
            var data = JSON.parse(response.body)
            browser.assert.equal(response.statusCode, '200')
        })
    },

    'API Testing - POST': function (browser) {
        var apiUrl = 'https://reqres.in/api/users'
        var postData = {'name':'QA CoE Name', 'job':'Unosquare QA'}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
  
            browser.assert.equal(response.statusCode, '201')
            browser.assert.equal(response.body.name, 'QA CoE Name')
            browser.assert.equal(response.body.job, 'Unosquare QA')
        })
    }
};
