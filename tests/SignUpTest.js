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

    it("sign up test", function () {
        return driver
            // fill pin
            .waitForElementById("ua.com.deltabank.pay2you:id/et_p1", 5000).sendKeys('1')
            .elementById("ua.com.deltabank.pay2you:id/et_p2").sendKeys('2')
            .elementById("ua.com.deltabank.pay2you:id/et_p3").sendKeys('3')
            .elementById("ua.com.deltabank.pay2you:id/et_p4").sendKeys('4')
            // confirm pin
            .elementById("ua.com.deltabank.pay2you:id/et_p1_conf").sendKeys('1')
            .elementById("ua.com.deltabank.pay2you:id/et_p2_conf").sendKeys('2')
            .elementById("ua.com.deltabank.pay2you:id/et_p3_conf").sendKeys('3')
            .elementById("ua.com.deltabank.pay2you:id/et_p4_conf").sendKeys('4')
            // send pin
            .elementById("ua.com.deltabank.pay2you:id/btn_ok_password").should.eventually.exist.click()
            // assert and fill phone
            .elementById("ua.com.deltabank.pay2you:id/et_phone_1").should.eventually.exist.sendKeys('93')
            .elementById("ua.com.deltabank.pay2you:id/et_phone_2").sendKeys('125')
            .elementById("ua.com.deltabank.pay2you:id/et_phone_3").sendKeys('42')
            .elementById("ua.com.deltabank.pay2you:id/et_phone_4").sendKeys('12')
            .elementById("ua.com.deltabank.pay2you:id/btn_ok_enterphone").should.eventually.exist.click()
            // assert dashboard
            .elementById("android:id/content").should.eventually.exist
    });
});