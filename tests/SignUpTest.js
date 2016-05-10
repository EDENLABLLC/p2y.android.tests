"use strict";

var wd = require("wd"),
    _ = require('underscore');

require('../helpers/setup.js');

describe("Pay2You Android Tests", function () {
    this.timeout(300000);
    var driver;
    var allPassed = true;

    beforeEach(function () {
        var driverObj = require('../helpers/driver.js').init();
        driver = driverObj.driver;
        driver = driver.sleep(10000);

        return driver.promise;
    });

    afterEach(function () {
        allPassed = allPassed && this.currentTest.state === 'passed';
        return driver.quit();
    });

    var pin_page = require('../pages/pin_page.js');

    it("signUp test", function () {
        return pin_page.fillPin(driver)
            .then(function () {
                return pin_page.confirmPin(driver)
            })
            .then(function () {
                return pin_page.confirmButtonClick(driver)
            })
            .then(function (phone_page) {
                return phone_page.fillPhoneNumber(driver)
            })
            .then(function (dashboard_page) {
                return dashboard_page.assertDashboard(driver)
            })
    });
});