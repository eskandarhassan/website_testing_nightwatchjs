module.exports = {
  src_folders: ["tests"],

  webdriver: {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://nightwatchjs.org',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName : 'chrome'
      },
    },
  }
}