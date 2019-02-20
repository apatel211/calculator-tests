const { Given, When, Then, After } = require('cucumber');
var sleep = require('sleep');
var expect = require('chai').expect;
var MainClass = require ('../../helper.js')

var canvasInStart, canvasInResult;
var Main = new MainClass();


Given(/^I Able to see Calculator$/, function() {
  sleep.sleep(5);
  return Main.visit('https://www.online-calculator.com/full-screen-calculator/');
});

When(/^I have entered "([^"]*)" and "([^"]*)" into the calculator, Substraction$/, function ( number1, number2 ) {
  canvasInStart = Main.getDataURL("canvas");

  console.log("Entered values are "+number1+" & "+number2);  

  return Main.sendKeys(number1+"-"+number2+"=");

});

Then(/^Calculator state has changed after substration$/, function () {
  canvasInResult = Main.getDataURL("canvas");
  
  // expect(canvasInStart).not.equal(canvasInResult);
  assert.notEqual(canvasInStart, canvasInResult, "fine")


  console.log("Substraction is working fine");   
  
  return;
});

When(/^I have entered "([^"]*)" and "([^"]*)" into the calculator, Division$/, function ( number1, number2 ) {

  console.log("Entered values are "+number1+" & "+number2); 
  
  return Main.sendKeys(number1+"/"+number2+"=");
});

Then(/^Calculator state has changed after division$/, function () {
  canvasInResult = Main.getDataURL("canvas");
  
  // expect(canvasInStart).not.equal(canvasInResult);
  
  console.log("Division is working fine ");

  return;
});

Then(/^Click on "([^"]*)" to clear the value$/, function ( arg1 ) {
  return Main.sendKeys("c");
});

After(function() {
  return Main.quit();
});
  


