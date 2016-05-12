"use strict";

require('../pages/pay_page.js');

var cards_page = function () {

    this.assertAndfillCard = function (driver, val1, val2, val3, val4, MM, YY, CVV) {
        return driver.sleep(2000).elementById("ua.com.deltabank.pay2you:id/ll_pager").should.eventually.exist
            .elementById("ua.com.deltabank.pay2you:id/et_numbercard1").sendKeys(val1)
            .elementById("ua.com.deltabank.pay2you:id/et_numbercard2").sendKeys(val2)
            .elementById("ua.com.deltabank.pay2you:id/et_numbercard3").sendKeys(val3)
            .elementById("ua.com.deltabank.pay2you:id/et_numbercard4").sendKeys(val4)
            .elementById("ua.com.deltabank.pay2you:id/et_validMonth").sendKeys(MM)
            .elementById("ua.com.deltabank.pay2you:id/et_validYear").sendKeys(YY)
            .elementById("ua.com.deltabank.pay2you:id/et_cvc2").sendKeys(CVV)
            .elementById("ua.com.deltabank.pay2you:id/transfer_layout_btn_select_receiver").click()
    };

    this.fillUserCardAndPay = function (driver, value1, value2, value3, value4, amount) {
        return driver.elementById("ua.com.deltabank.pay2you:id/et_cardnumber_rec_1").should.eventually.exist.sendKeys(value1)
            .elementById("ua.com.deltabank.pay2you:id/et_cardnumber_rec_2").sendKeys(value2)
            .elementById("ua.com.deltabank.pay2you:id/et_cardnumber_rec_3").sendKeys(value3)
            .elementById("ua.com.deltabank.pay2you:id/et_cardnumber_rec_4").sendKeys(value4)
            .elementById("ua.com.deltabank.pay2you:id/btn_enter_money").click()
            .elementById("ua.com.deltabank.pay2you:id/transfer_layout_et_money").sendKeys(amount)
            .elementById("ua.com.deltabank.pay2you:id/btn_PrepareTransfer").click()
            .then(function () {
                return require('./pay_page.js');
            });
    };
};

module.exports = new cards_page();