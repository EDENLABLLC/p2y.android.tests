"use strict";

require('../pages/dashboard_page.js');

var phone_page = function () {

    this.fillPhoneNumber = function (driver, value1, value2, value3, value4) {
        return driver.elementById("ua.com.deltabank.pay2you:id/et_phone_1").should.eventually.exist.sendKeys(value1)
            .elementById("ua.com.deltabank.pay2you:id/et_phone_2").sendKeys(value2)
            .elementById("ua.com.deltabank.pay2you:id/et_phone_3").sendKeys(value3)
            .elementById("ua.com.deltabank.pay2you:id/et_phone_4").sendKeys(value4)
            .elementById("ua.com.deltabank.pay2you:id/btn_ok_enterphone").should.eventually.exist.click()
            .then(function () {
                return require('./dashboard_page.js');
            });
    };
};

module.exports = new phone_page();