"use strict";

var pay_page = function () {

    this.payButton = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/confirmation_layout_make_transfer_btn").should.eventually.exist.click()
        .sleep(5000)
    };
};

module.exports = new pay_page();