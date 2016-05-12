"use strict";

var wd = require("wd"),
    _ = require('underscore');

require('../helpers/setup.js');

describe("Pay2You Cards Tests", function () {
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

    it("PayFromCard test", function () {
        return pin_page.fillPin(driver, '1', '2', '3', '4', '1', '2', '3', '4')
            .then(function () {
                return pin_page.confirmButtonClick(driver)
            })
            .then(function (phone_page) {
                return phone_page.fillPhoneNumber(driver, '93', '125', '42', '12')
            })
            .then(function (dashboard_page) {
                return dashboard_page.transferCard(driver)
            })
            .then(function (cards_page) {
                return cards_page.assertAndfillCard(driver, '5168', '7420', '2162', '2059', '02', '18', '771')
            })
            .then(function (cards_page) {
                return cards_page.fillUserCardAndPay(driver, '5168', '7420', '2162', '2059', '1')
            })
            .then(function (pay_page) {
                return pay_page.assertPay(driver)
            })
    });
});