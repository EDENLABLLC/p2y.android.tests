"use strict";

require('../pages/phone_page.js');

var pin_page = function () {

    this.fillPin = function (driver, value1, value2, value3, value4) {
        return driver.sleep(5000)
            .elementById("ua.com.deltabank.pay2you:id/et_p1").sendKeys(value1)
            .elementById("ua.com.deltabank.pay2you:id/et_p2").sendKeys(value2)
            .elementById("ua.com.deltabank.pay2you:id/et_p3").sendKeys(value3)
            .elementById("ua.com.deltabank.pay2you:id/et_p4").sendKeys(value4)
            .elementById("ua.com.deltabank.pay2you:id/et_p1_conf").sendKeys(value1)
            .elementById("ua.com.deltabank.pay2you:id/et_p2_conf").sendKeys(value2)
            .elementById("ua.com.deltabank.pay2you:id/et_p3_conf").sendKeys(value3)
            .elementById("ua.com.deltabank.pay2you:id/et_p4_conf").sendKeys(value4);
    };

    this.confirmButtonClick = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/btn_ok_password").should.eventually.exist.click()
            .then(function () {
                return require('./phone_page.js');
            });
    };
};

module.exports = new pin_page();