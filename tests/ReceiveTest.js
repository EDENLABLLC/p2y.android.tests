"use strict";

var wd = require("wd"),
    _ = require('underscore');

require('../helpers/setup.js');
var fixtures = require('../fixtures');

describe("Pay2You Receive Tests", function () {
    this.timeout(300000);
    var driver;
    var allPassed = true;

    beforeEach(function () {
        var driverObj = require('../helpers/driver.js').init();
        driver = driverObj.driver;
        driver = driver.sleep(5000);

        return driver.promise;
    });

    afterEach(function () {
        allPassed = allPassed && this.currentTest.state === 'passed';
        return driver.closeApp().quit();
    });

    var pin_page = require('../pages/pin_page.js');

    it("Receive PromoCode positive", function () {
        var card = fixtures.cards[2];
        return pin_page.fillPin(driver, '1111', '1111')
            .then(function () {
                return pin_page.confirmButtonClick(driver)
            })
            .then(function (phone_page) {
                return phone_page.fillPhoneNumber(driver, '931254212')
            })
            .then(function (dashboard_page) {
                return dashboard_page.assertDashboard(driver)
                    .then(function () {
                        return dashboard_page.receiveCard(driver)
                    })
                    .then(function (receive_page) {
                        return receive_page.fillPromoCode(driver, '123456')
                            .then(function () {
                                return receive_page.fillUserCard(driver, 'testCard', card.number)
                            }).then(function () {
                                return receive_page.swipeAction(driver, '396', '1148', '376', '368')
                            }).then(function () {
                                return receive_page.receive(driver)
                            })
                    })
            });
    });

    it("Receive Facebook positive", function () {
        return pin_page.fillPin(driver, '1111', '1111')
            .then(function () {
                return pin_page.confirmButtonClick(driver)
            })
            .then(function (phone_page) {
                return phone_page.fillPhoneNumber(driver, '931254212')
            })
            .then(function (dashboard_page) {
                return dashboard_page.assertDashboard(driver)
                    .then(function () {
                        return dashboard_page.receiveCard(driver)
                    })
                    .then(function (receive_page) {
                        return receive_page.receiveFacebook(driver)
                            .then(function (facebook_page) {
                                return facebook_page.fillFacebookForm(driver, 'furman16@yandex.ru', 'conviction2008')
                                    .then(function () {
                                        return facebook_page.assertReceive(driver)
                                    })
                                    .then(function (cards_page) {
                                        return cards_page.assertReceiveList(driver, 'You don’t have transfers yet')
                                    })
                            })
                    })
            });
    });
});