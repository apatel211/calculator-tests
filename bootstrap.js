// var wd = require('wd');
// var fs = require('fs');
// var chai = require("chai");
// require("colors");

// var Settings = require('./testenvironment');
// var chaiAsPromised = require("chai-as-promised");


// chai.use(chaiAsPromised);
// chai.should();
// chaiAsPromised.transferPromiseness = wd.transferPromiseness;
// var seleniumWebdriver = require('selenium-webdriver');


// exports.log = require('custom-logger').config({ level: Settings.loglevelmin });
// exports.log.info().config({ color: 'green', format: '%event% - %message%' });
// exports.MaxWaitTime = Settings.maxwaittime;

// if(Settings.onsauce) {
//     exports.log.info("Running on sauce");
//     exports.browser = wd.promiseChainRemote(Settings.sauce.host, Settings.sauce.port, Settings.sauce.username, Settings.sauce.accesskey);

//     exports.desired = {
//         name:Settings.sauce.name,
//         browserName:Settings.sauce.browserName,
//         platform:Settings.sauce.platform,
//         version:Settings.sauce.version,
//         deviceName:Settings.sauce.deviceName,
//         app:Settings.sauce.path
//     };
//     exports.desired['appium-version'] = Settings.sauce['appium-version'];
// }
// else {
//     exports.log.info("Running locally");
//     // exports.browser = wd.promiseChainRemote(Settings.local.host, Settings.local.port);

//     exports.desired = {
//     //     name:Settings.local.name,
//         // browserName:Settings.local.browserName,
//         // platform:Settings.local.platform,
//         // platformName:Settings.local.platform,
//         // version:Settings.local.version,
//         // deviceName:Settings.local.deviceName,
//         // app:Settings.local.path

//         driver = new seleniumWebdriver.Builder()
//                   .forBrowser('chrome')
//                   .build()

//     };
//     // exports.desired['appium-version'] = Settings.sauce['appium-version'];
//     // exports.autoAcceptAlerts = false;
// }

// exports.writeToFile = function(content) {
//     fs.appendFile(Settings.resultsFile, content + "\n\n", function(err) {
//         if(err) {
//             exports.log.warn(err);
//         } else {
//             exports.log.info("The test link file was saved!");
//         }
//     }); 
// }

// exports.HandleErrors = function(itDidNotWorkCB, itWorkedCB) {
//     return function (err, other) {
//         if (err) {
//             itDidNotWorkCB("oops" + err);
//         }
//         else {
//             itWorkedCB(null, other);
//         }
//     }
// }

// fs.unlink(Settings.resultsFile, function(err) {
//     if(err) {
//         exports.log.warn(err);
//     } else {
//         exports.log.info("The test link file was removed!");
//     }
// });

// exports.settings = Settings;
// exports.writeToFile("Sauce Test Reults");

