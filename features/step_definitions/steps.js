var assert = require('assert');

module.exports = function () {

  this.Given(/^I Able to see Calculator$/, function() {
    return this.driver.get('https://www.online-calculator.com/full-screen-calculator/');
  });

  this.When(/^I have entered "([^"]*)" and "([^"]*)" into the calculator$/, function (number1, number2, ) {

  });

  this.When(/^I click on subsctraction$/, function () {
	return this.driver.wait(until.elementLocated(By.tagName("document")), 5000);
  };
