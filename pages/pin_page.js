"use strict";

require('../pages/phone_page.js');

var pin_page = function () {

    this.fillPin = function (driver, value, value2) {
        return driver.elementById("ua.com.deltabank.pay2you:id/et_p1").sendKeys(value)
            .elementById("ua.com.deltabank.pay2you:id/et_p1_conf").sendKeys(value2)
    };

    this.confirmButtonClick = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/btn_ok_password").should.eventually.exist.click()
            .then(function () {
                return require('./phone_page.js');
            });
    };

    this.pinPageAssert = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/btn_ok_password").should.eventually.exist
    };

    this.thermsButtonClick = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/chb_dogovor").click()
    };
};

module.exports = new pin_page();