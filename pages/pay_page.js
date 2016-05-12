"use strict";

var pay_page = function () {

    this.assertPay = function (driver) {
        return driver.sleep(20000)
    };
};

module.exports = new pay_page();