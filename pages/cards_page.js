"use strict";

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
};

module.exports = new cards_page();