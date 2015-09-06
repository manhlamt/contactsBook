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
                console.log(attrs.addressViewOnly );

                scope.activate = function (address) {
                    listingController.deactivateAll();
                    address.isActive = true;
                };

                scope.delete = function (index) {
                    listingController.delete(index);
                };

                scope.edit = function (address) {
                    var modalInstance = $modal.open({
                        templateUrl: 'modules/contacts/views/address/addressModal.html',
                        controller: 'AddressController',
                        resolve: {
                            item: function () {
                                return address;
                            }
                        }
                    });

                    //modalInstance.result.then(function (address) {
                    //    $scope.blocks.push(address);
                    //});
                };

                scope.viewOnly = (attrs.addressViewOnly && attrs.addressViewOnly !== 'false')
            }
        }
    }
]);
