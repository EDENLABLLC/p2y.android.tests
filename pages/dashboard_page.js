"use strict";

require('../pages/cards_page.js');
require('../pages/receive_page.js');

var dashboard_page = function () {

    this.assertDashboard = function (driver) {
        return driver.elementById("android:id/content").should.eventually.exist
    };

    this.transferCard = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/ll_send_money").should.eventually.exist.click()
            .then(function () {
                return require('./cards_page.js');
            });
    };

    this.receiveCard = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/ll_receive_money").should.eventually.exist.click()
            .then(function () {
                return require('./receive_page.js');
            });
    };
};

module.exports = new dashboard_page();