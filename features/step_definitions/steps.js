var assert = require('assert');
var sleep = require('sleep');
var canvasInStart, canvasInResult;
var MainClass = require ('../../helper.js')
var Main = new MainClass();


module.exports = function () {

  this.When(/^I Able to see Calculator$/, function() {
    return Main.visit('https://www.online-calculator.com/full-screen-calculator/');
  });

  this.When(/^I have entered "([^"]*)" and "([^"]*)" into the calculator, Substraction$/, function ( number1, number2 ) {
    
      canvasInStart = Main.getDataURL("canvas");

      return Main.sendKeys(number1+"-"+number2+"=");

  });

  this.Then(/^subsctraction value is$/, function () {
    canvasInResult = Main.getDataURL("canvas");
    
    if (canvasInStart != canvasInResult ) {
      console.log("Canvases not equal");
    }
   
    return;
  });

  this.When(/^I have entered "([^"]*)" and "([^"]*)" into the calculator, Division$/, function ( number1, number2 ) {
    return Main.sendKeys(number1+"/"+number2+"=");
  });

  this.Then(/^Division value is$/, function () {
    canvasInResult = Main.getDataURL("canvas");
    
    if (canvasInStart != canvasInResult ) {
      console.log("Canvases not equal");
    }
   
    return;
  });

  this.Then(/^Click on "([^"]*)" to clear the value$/, function ( arg1 ) {
    return Main.sendKeys("c");
  });

  this.After(function() {
    return Main.quit();
  });
    
}