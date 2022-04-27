module.exports = {
    page_objects_path:['PageObjects/Unosquare'],
    skip_testcases_on_fail: true,
    src_folders: ['tests'],

    webdriver: {
        start_process: true,
        port: 4444,
        server_path: require('chromedriver').path,
        cli_args: [
        ]
    },
    test_settings: {
        default: {
            launch_url: 'https://www.unosquare.com',
            desiredCapabilities: {
                browserName: 'chrome',
                loggingPrefs: { 'browser': 'ALL' },
                chromeOptions : {
                    "args" : ["start-maximized"]
                }                
            }
        }
    }
};