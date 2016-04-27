"use strict";

var wd = require("wd"),
    _ = require('underscore'),
    serverConfigs = require('./appium-server.js'),
    argv = require('yargs').argv;

var serverConfig = serverConfigs.local;

exports.init = function (env) {

    env = env || argv.env;
    if (!env) {
        console.warn('Unspecified environment');
        process.exit(1);
    }
    var driver = wd.promiseChainRemote(serverConfig);
    require("./logging").configure(driver);

    var desired = _.clone(require("./caps")[env]);

    return _.clone({
        driver: driver,
        promise: driver.init(desired).setImplicitWaitTimeout(3000)
    });
};