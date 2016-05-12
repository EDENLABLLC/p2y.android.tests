"use strict";

var wd = require("wd"),
    _ = require('underscore');

require('../helpers/setup.js');

describe("Pay2You SignUp Tests", function () {
    this.timeout(300000);
    var driver;
    var allPassed = true;

    beforeEach(function () {
        var driverObj = require('../helpers/driver.js').init();
        driver = driverObj.driver;
        driver = driver.sleep(5000);

        return driver.promise;
    });

    afterEach(function () {
        allPassed = allPassed && this.currentTest.state === 'passed';
        return driver
            .resetApp()
            .quit();
    });

    var pin_page = require('../pages/pin_page.js');

    it("signUp test", function () {
        return pin_page.fillPin(driver, '1', '2', '3', '4', '1', '2', '3', '4')
            .then(function () {
                return pin_page.confirmButtonClick(driver)
            })
            .then(function (phone_page) {
                return phone_page.fillPhoneNumber(driver, '93', '125', '42', '12')
            })
            .then(function (dashboard_page) {
                return dashboard_page.assertDashboard(driver)
            })
    });

    it("signUp test bad pin", function () {
        return pin_page.fillPin(driver, '1', '2', '3', '4', '1', '1', '1', '1')
            .then(function () {
                return pin_page.confirmButtonClick(driver)
                    .then(function () {
                        return pin_page.pinPageAssert(driver)
                    })
            })
    });

    it("signUp test without therms", function () {
        return pin_page.fillPin(driver, '1', '2', '3', '4', '1', '2', '3', '4')
            .then(function () {
                return pin_page.thermsButtonClick(driver)
                    .then(function () {
                        return pin_page.confirmButtonClick(driver)
                    })
            })
    });
});