"use strict";

require('../pages/cards_page.js');

var facebook_page = function () {

    this.fillFacebookForm = function (driver, login, password) {
        return driver.waitForElementByXPath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[3]/android.widget.EditText[1]").sendKeys(login)
            .elementByXPath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[3]/android.widget.EditText[2]").sendKeys(password)
            .elementByXPath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[3]/android.widget.Button[1]").click()
            .waitForElementByXPath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[4]/android.view.View[3]/android.view.View[2]/android.widget.Button[1]").click()
    };

    this.assertAndChooseFriend = function (driver) {
        return driver.waitForElementByXPath("//android.view.View[1]/android.widget.FrameLayout[2]/android.widget.LinearLayout[1]/android.widget.ListView[1]/android.widget.RelativeLayout[2]").click()
            .then(function () {
                return require('./cards_page.js');
            });
    };

    this.assertReceive = function () {
        return require('./cards_page.js');
    };
};

module.exports = new facebook_page();