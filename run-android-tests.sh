#!/bin/bash

open -a /Applications/Genymotion.app/Contents/MacOS/player.app --args --vm-name 'Google Nexus 4'

sleep 2

appium&

sleep 10

mocha tests/*.js --env android

sleep 2

pkill player

killall node