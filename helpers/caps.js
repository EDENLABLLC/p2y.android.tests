"use strict";

var apps = require('./apps');

exports.ios = {
    browserName: '',
    maxInstances: 1,
    platformName: "iOS",
    platformVersion: "8.4",
    deviceName: "iPhone 6",
    newCommandTimeout: 999999,
    sendKeyStrategy: 'setValue',
    autoAcceptAlert: true,
    waitForAppScript: true,
    launchTimeout: 999999,
    app: apps.ios
};

exports.android = {
    browserName: '',
    platformName: "android",
    platformVersion: "5.1",
    deviceName: "Google Nexus 4",
    newCommandTimeout: 999999,
    sendKeyStrategy: 'setValue',
    autoAcceptAlert: true,
    waitForAppScript: true,
    launchTimeout: 999999,
    appPackage: apps.androidActivity,
    appWaitActivity: apps.androidPageActivity,
    app: apps.android
};