"use strict";

require('../pages/facebook_page.js');
require('../pages/pay_page.js');

var cards_page = function () {

    this.fillCard = function (driver, number, month, year, cvv) {
        return driver.waitForElementById("ua.com.deltabank.pay2you:id/ll_pager")
            .elementById("ua.com.deltabank.pay2you:id/et_numbercard1").sendKeys(number)
            .elementById("ua.com.deltabank.pay2you:id/et_validMonth").sendKeys(month)
            .elementById("ua.com.deltabank.pay2you:id/et_validYear").sendKeys(year)
            .elementById("ua.com.deltabank.pay2you:id/et_cvc2").sendKeys(cvv)
            .elementById("ua.com.deltabank.pay2you:id/transfer_layout_btn_select_receiver").click()
    };

    this.fillUserCardAndPay = function (driver, number, amount) {
        return driver.elementById("ua.com.deltabank.pay2you:id/et_cardnumber_rec_1").should.eventually.exist.sendKeys(number)
            .elementById("ua.com.deltabank.pay2you:id/btn_enter_money").click()
            .elementById("ua.com.deltabank.pay2you:id/transfer_layout_et_money").sendKeys(amount)
            .elementById("ua.com.deltabank.pay2you:id/btn_PrepareTransfer").click()
            .then(function () {
                return require('./pay_page.js');
            });
    };

    this.assertReceiveList = function (driver, text) {
        return driver.waitForElementById("ua.com.deltabank.pay2you:id/empty_list_transfers").text()
            .should.become(text)
    };

    this.goToFacebook = function (driver) {
        return driver.elementById("ua.com.deltabank.pay2you:id/transfer_layout_other_transfer_select_1").click()
            .elementById("ua.com.deltabank.pay2you:id/btn_selectfriendfacebook").should.eventually.exist.click()
            .elementById("ua.com.deltabank.pay2you:id/authButton").should.eventually.exist.click()
            .then(function () {
                return require('./facebook_page.js');
            });
    };

    this.fillUserPhoneAndPay = function (driver, phone, amount) {
        return driver.elementById("ua.com.deltabank.pay2you:id/transfer_layout_phone_transfer_select_1").click()
            .elementById("ua.com.deltabank.pay2you:id/et_phone_1").sendKeys(phone)
            .elementById("ua.com.deltabank.pay2you:id/btn_enter_money").click()
            .elementById("ua.com.deltabank.pay2you:id/transfer_layout_et_money").sendKeys(amount)
            .elementById("ua.com.deltabank.pay2you:id/btn_PrepareTransfer").click()
            .then(function () {
                return require('./pay_page.js');
            });
    };

    this.assertAlertMessage = function (driver, text) {
        return driver.elementById("android:id/message").text()
            .should.become(text)
    };

    this.assertFriendsAndPay = function (driver, amount) {
        return driver.waitForElementById("ua.com.deltabank.pay2you:id/btn_enter_money").should.eventually.exist.click()
            .elementById("ua.com.deltabank.pay2you:id/transfer_layout_et_money").sendKeys(amount)
            .elementById("ua.com.deltabank.pay2you:id/btn_PrepareTransfer").click()
            .then(function () {
                return require('./pay_page.js');
            });
    };
};

module.exports = new cards_page();