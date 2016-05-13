"use strict";

var pay_page = function () {

    this.assertPay = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/confirmation_layout_make_transfer_btn").should.eventually.exist.click()
    };
};

module.exports = new pay_page();