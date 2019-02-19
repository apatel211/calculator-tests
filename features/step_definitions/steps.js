var assert = require('assert');
var fs = require("fs");
var Canvas = require("canvas");
var jdenticon = require("jdenticon");


    // var canvas = new canvas(200, 200, "png");
    // var g = canvas.getContext("2d");
    // g.fillStyle = "black";
    // g.fillRect(0, 0, 100, 100);

module.exports = function () {

  this.Given(/^I Able to see Calculator$/, function() {
  	return this.driver.get('https://www.online-calculator.com/full-screen-calculator/');
  });

  this.When(/^I have entered "([^"]*)" and "([^"]*)" into the calculator, Substraction$/, function ( number1, number2 ) {
  	// return this.driver.switchTo().activeElement().sendKeys(number1+"-"+number2+"=");


    // var buf = canvas.toBuffer();
    // fs.writeFileSync("test.png", buf);


    // var pngfile = fs.createWriteStream("./testicon.png"),
    //   stream = canvas.pngStream();
    //     stream.on("data", function(chunk){
    //       console.log("not save png");
    //         pngfile.write(chunk);
    //     });
    //     stream.on("end", function(){
    //         console.log("saved png");
    //     });

        const fs = require('fs')
      const out = fs.createWriteStream(../reports + '/test.png')
      const stream = canvas.createPNGStream()
      stream.pipe(out)
      out.on('finish', () =>  console.log('The PNG file was created.'))

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