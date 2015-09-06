/**
 * Created by lam on 5/9/15.
 */
/**
 * Created by lam on 5/9/15.
 */

angular.module('contacts').directive('addressBlock', ['$modal',
    function ($modal) {
        return {
            restrict: 'A',
            require: '^addressListing',
            scope: {
                address: '=',
                index: '='
            },
            templateUrl: 'modules/contacts/views/address/block.client.view.html',
            controller: function ($scope) {
            },
            link: function (scope, element, attrs, listingController) {
                console.log(scope.index);

                scope.activate = function (address) {
                    listingController.deactivateAll();
                    address.isActive = true;
                };

                scope.delete = function (index) {
                    listingController.delete(index);
                }
            }
        }
    }
]);
