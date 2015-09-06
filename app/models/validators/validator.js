/**
 * Created by lam on 6/9/15.
 */

'use strict';

var validatorLib = require('validator');

exports.email = function (text) {
    return validatorLib.isEmail(text);
};

exports.mobilePhone  = function (text) {
    var regex = /0\d{8,10}/;
    return regex.test(text);
};
