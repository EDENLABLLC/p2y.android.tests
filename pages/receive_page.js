"use strict";

require('./facebook_page.js');

var wd = require('wd');

var receive_page = function () {

    this.fillPromoCode = function (driver, code) {
        return driver.waitForElementById("ua.com.deltabank.pay2you:id/et_code_transfer").sendKeys(code)
            .elementById("ua.com.deltabank.pay2you:id/receiver_layout_btn_SelectCard").click()
    };

    this.fillUserCard = function (driver, name, cardNumber) {
        return driver.elementById("ua.com.deltabank.pay2you:id/et_rec_name_bank").should.eventually.exist.sendKeys(name)
            .elementById("ua.com.deltabank.pay2you:id/et_card_rec_1").sendKeys(cardNumber)
    };

    this.swipeAction = function (driver, startX, startY, endX, endY) {
        var action = new wd.TouchAction(driver);
        return action
            .press({x: startX, y: startY})
            .wait(800)
            .moveTo({x: endX, y: endY})
            .release()
            .perform();
    };

    this.receive = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/receiver_layout_btn_select_receiver").should.eventually.exist.click()
            .sleep(5000)
    };

    this.receiveFacebook = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/receive_layout_choose1_other").click()
            .elementById("ua.com.deltabank.pay2you:id/btn_select_transfers_facebook").should.eventually.exist.click()
            .elementById("ua.com.deltabank.pay2you:id/authButton").should.eventually.exist.click()
            .then(function () {
                return require('./facebook_page.js');
            });
    };

    this.assertAlertMessage = function (driver, text) {
        return driver.elementById("android:id/message").text()
            .should.become(text)
    };
};

module.exports = new receive_page();