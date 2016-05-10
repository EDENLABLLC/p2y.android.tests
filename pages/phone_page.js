"use strict";

require('../pages/dashboard_page.js');

var phone_page = function () {

    this.fillPhoneNumber = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/et_phone_1").should.eventually.exist.sendKeys('93')
            .elementById("ua.com.deltabank.pay2you:id/et_phone_2").sendKeys('125')
            .elementById("ua.com.deltabank.pay2you:id/et_phone_3").sendKeys('42')
            .elementById("ua.com.deltabank.pay2you:id/et_phone_4").sendKeys('12')
            .elementById("ua.com.deltabank.pay2you:id/btn_ok_enterphone").should.eventually.exist.click()
            .then(function () {
                return require('./dashboard_page.js');
            });
    };
};

module.exports = new phone_page();