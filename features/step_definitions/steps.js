var assert = require('assert');

module.exports = function () {

  this.Given(/^I Able to see Calculator$/, function() {
  	return this.driver.get('https://www.online-calculator.com/full-screen-calculator/');
  });

  this.When(/^I have entered "([^"]*)" and "([^"]*)" into the calculator, Substraction$/, function ( number1, number2 ) {
  	return this.driver.switchTo().activeElement().sendKeys(number1+"-"+number2+"=");
  });

  this.Then(/^subsctraction value is$/, function () {
    console.log("Substrcation value is")
  });

  this.When(/^I have entered "([^"]*)" and "([^"]*)" into the calculator, Division$/, function ( number1, number2 ) {
    return this.driver.switchTo().activeElement().sendKeys(number1+"/"+number2+"=");
  });

  this.Then(/^Division value is$/, function () {
    console.log("Division value is ")
  });

  this.Then(/^Click on "([^"]*)" to clear the value$/, function ( arg1 ) {
    return this.driver.switchTo().activeElement().sendKeys("c");
  });
    
}