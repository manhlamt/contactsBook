/**
 * Created by lam on 5/9/15.
 */

'use strict';

angular.module('contacts').filter('genderFilter', function () {
    return function (gender) {
        var genders = {
            m: 'Male',
            f: 'Female',
            u: 'Who knows ?!'
        };

        return genders[gender];
    };
});
