module.exports = {
    before: function (browser) {
        browser.globals.waitForConditionTimeout = 7000
    },
    
    'API NASA Testing - GET Positive v1': function (browser) {
        var apiUrl = 'https://api.nasa.gov/DONKI/WSAEnlilSimulations?startDate=2016-01-06&endDate=2016-01-06&api_key=VkziixA94PZX2DqhQS5VHZ6lSqtKhfX1SdWmU1UQ';
        browser.apiGet(apiUrl, function(response) {
            var data = JSON.parse(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(data[0].isEarthGB, false)
            browser.assert.equal(data[1].isEarthGB, false)
        })
    },

    'API NASA Testing - GET Positive v2': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=VkziixA94PZX2DqhQS5VHZ6lSqtKhfX1SdWmU1UQ';
        browser.apiGet(apiUrl, function(response) {
            var data = JSON.parse(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(data.title, 'Moon Shadow on Jupiter')
            browser.assert.equal(data.media_type, 'image')
        })
    },

    'API Reqres Testing - POST Positive': function (browser) {
        var apiUrl = 'https://reqres.in/api/register';
        var postData = { "email": "eve.holt@reqres.in", "password": "pistol" }
        browser.apiPost(apiUrl, postData, null, null, function(response) {
            browser.assert.equal(response.statusCode, '200')
        })
    }
    
};