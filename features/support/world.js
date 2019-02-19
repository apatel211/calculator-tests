var seleniumWebdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

until = seleniumWebdriver.until;
By = seleniumWebdriver.By;

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
                  .forBrowser('chrome')
                  .build();

}

module.exports = function() {
  this.World = CustomWorld;
  this.setDefaultTimeout(30 * 1000);
};


