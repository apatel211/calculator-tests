var seleniumWebdriver = require('selenium-webdriver');
var firefox = require('selenium-webdriver/firefox');
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




// var wd = require('wd');
// var bs = require('../../bootstrap');
// var xpath = require('xpath');
// var id = require('id');
// var log = bs.log;
// var browser;
// var asserters = wd.asserters;
// var tn = require('../../testenvironment.json');

//xapths
// var registrationXpath="//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAButton[1]";
// var emailXapth="//UIAApplication[1]/UIAWindow[1]/UIAStaticText[1]";
// var passowrdXpath="//UIAApplication[1]/UIAWindow[1]/UIAStaticText[2]";
// var loginXpath="//UIAApplication[1]/UIAWindow[1]/UIAButton[3]";

// var buttonID="canvas";


// var RegistrationPage = function(theBrowser) {
//     log.info("Creating Tour Page object");

//     this.browser = theBrowser;
//     browser = theBrowser;
// };

// var driver;

// //click on registration page
// RegistrationPage.prototype.clickonregistration= function(done) {
//     browser.waitForElementByID(buttonID,function(err, el){
//         if(err) {
//             done(err);
//         }else{
//             el.click(function(err){
//                 if(err)
//                 {
//                     done(err);
//                 }else{
//                     done();
//                 }
//             });
//         }
//     });
// }

// RegistrationPage.prototype.clickonpassword= function(done) {
//     browser.waitForElementByXPath(passowrdXpath,function(err, el2){
//         if(err) {
//             done(err);
//         }else{
//             el2.type("Ab1234",function(err){
//                 if(err)
//                 {
//                     done(err);
//                 }else{
//                     done();
//                 }
//             });
//         }
//     });
// }

// //click on registration page
// RegistrationPage.prototype.clickonloginbutton= function(done) {
//     browser.waitForElementByXPath(loginXpath,function(err, el){
//         if(err) {
//             done(err);
//         }else{
//             el.click(function(err){
//                 if(err)
//                 {
//                     done(err);
//                 }else{
//                     done();
//                 }
//             });
//         }
//     });
// }
// module.exports = RegistrationPage;
