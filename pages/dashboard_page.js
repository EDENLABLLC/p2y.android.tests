"use strict";

var dashboard_page = function () {

    this.assertDashboard = function (driver) {
        return driver.elementById("android:id/content").should.eventually.exist
    };
};

module.exports = new dashboard_page();