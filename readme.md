### Getting Started

This task is about designing an E2E test case for finalizing the purchase of an item in an e-commerce website.  These instructions will get you a copy of the project up and running on your local machine for a demo.

### Requirements

To set up the enviroment, we need: ```node.js``` and ```npm```. To check them on your machine run:

```
node -v
npm -v
```

And we choose to use ```chromedriver``` web driver for this project.  Install Chromedriver:

```
npm install chromedriver --save
```

Install the dependiencies in the node folder:

```
npm install nightwatch --save-dev
```
Change your test script to ```nightwatch``` so your ```package.json``` looks like this:

```
{
"name": "nightwatch-demo",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "nightwatch"
},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"chromedriver": "^83.0.0",
"nightwatch": "^1.3.6"
}
}
```

#### Setting up ```Nightwatch.js``` and the test folder: 

You can create your configuration file **two** different ways. One is by letting the framework do all the work by running ```npm run test```; this will create a huge file with all possible configurations (this way is depreciated for this project). Another way is to  configure a ```nightwatch.conf.js``` file with just the essentials: your test folder, a webdriver path, the default settings, and a screenshot-on-failure feature:

```
module.exports = {
src_folders: ["tests"],
webdriver: {
"start_process": true,
"server_path":
"node_modules/.bin/chromedriver",
"port": 9515
},
test_settings: {
default: {
disable_error_log: false,
launch_url: 'https://nightwatchjs.org'
,
screenshots: {
enabled: false,
path: 'screens'
,
on_failure: true
},
desiredCapabilities: {
browserName : 'chrome'
    },
  },
 }
}
```

Finally, run the tests: 

```
npm run test
```
And the expected output looks like this:


![Screenshot 2021-06-20 at 17 47 55](https://user-images.githubusercontent.com/24881592/122690563-8c587980-d22a-11eb-8762-d8c49214ebd2.jpg)
