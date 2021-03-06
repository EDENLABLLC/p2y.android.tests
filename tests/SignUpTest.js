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
        return driver.closeApp().quit();
    });

    var pin_page = require('../pages/pin_page.js');

    it("signUp", function () {
        return pin_page.fillPin(driver, '1234', '1234')
            .then(function () {
                return pin_page.confirmButtonClick(driver)
            })
            .then(function (phone_page) {
                return phone_page.fillPhoneNumber(driver, '931254212')
            })
            .then(function (dashboard_page) {
                return dashboard_page.assertDashboard(driver)
            })
    });

    it("signUp bad pin", function () {
        return pin_page.fillPin(driver, '1234', '1111')
            .then(function () {
                return pin_page.confirmButtonClick(driver)
                    .then(function () {
                        return pin_page.pinPageAssert(driver)
                    })
            })
    });

    it("signUp without therms", function () {
        return pin_page.fillPin(driver, '2222', '2222')
            .then(function () {
                return pin_page.thermsButtonClick(driver)
                    .then(function () {
                        return pin_page.confirmButtonClick(driver)
                    }).then(function () {
                        return pin_page.pinPageAssert(driver)
                    })
            })
    });
});