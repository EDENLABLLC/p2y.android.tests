#!/bin/bash

appium&

sleep 7

mocha tests/*.js --env ios

killall node