"use strict";

require('../pages/phone_page.js');

var pin_page = function () {

    this.fillPin = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/et_p1").should.eventually.exist.sendKeys('1')
            .elementById("ua.com.deltabank.pay2you:id/et_p2").sendKeys('2')
            .elementById("ua.com.deltabank.pay2you:id/et_p3").sendKeys('3')
            .elementById("ua.com.deltabank.pay2you:id/et_p4").sendKeys('4')
    };

    this.confirmPin = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/et_p1_conf").sendKeys('1')
            .elementById("ua.com.deltabank.pay2you:id/et_p2_conf").sendKeys('2')
            .elementById("ua.com.deltabank.pay2you:id/et_p3_conf").sendKeys('3')
            .elementById("ua.com.deltabank.pay2you:id/et_p4_conf").sendKeys('4');
    };

    this.confirmButtonClick = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/btn_ok_password").should.eventually.exist.click()
            .then(function () {
                return require('./phone_page.js');
            });
    };
};

module.exports = new pin_page();