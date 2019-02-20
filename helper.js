var seleniumWebdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

until = seleniumWebdriver.until;
By = seleniumWebdriver.By;


class Main {

	constructor () {
	  this.driver = new seleniumWebdriver.Builder()
		     .forBrowser('chrome')
		     .build();

	}
	async findById(id) {
	    await this.driver.wait(
	      until.elementLocated(By.id(id)),
	      15000,
	      "Looking for element"
	    );
	    return this.driver.findElement(By.id(id));
	  }

	  async getDataURL(id) {
	    await this.driver.wait(
	      until.elementLocated(By.id(id)),
	      15000,
	      "Looking for element"
	    );
	    return this.driver.findElement(By.id(id)).toDataURL();
	  }

	  visit(theUrl) {
	    return this.driver.get(theUrl);
	  }

	  async sendKeys(key) {
	    return await this.driver
	      .switchTo()
	      .activeElement()
	      .sendKeys(key);
	  }

	  quit() {
	  	this.driver.quit()
	  }

}

module.exports = Main; 



