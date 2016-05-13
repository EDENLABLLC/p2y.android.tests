"use strict";

require('../pages/dashboard_page.js');

var phone_page = function () {

    this.fillPhoneNumber = function (driver, value) {
        return driver.elementById("ua.com.deltabank.pay2you:id/et_phone_1").should.eventually.exist.sendKeys(value)
            .elementById("ua.com.deltabank.pay2you:id/btn_ok_enterphone").should.eventually.exist.click()
            .then(function () {
                return require('./dashboard_page.js');
            });
    };
};

module.exports = new phone_page();