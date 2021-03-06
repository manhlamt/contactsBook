/**
 * Created by lam on 5/9/15.
 */

'use strict';
angular.module('contacts').directive('addressListing', ['$modal',
    function ($modal) {
        return {
            restrict: 'A',
            templateUrl: 'modules/contacts/views/address/listing.client.view.html',
            scope: {
                blocks: '=addresses'
            },
            controller: function ($scope) {
                this.deactivateAll = function () {
                    angular.forEach($scope.blocks, function (block) {
                        block.isActive = false;
                    });
                };

                this.delete = function (index) {
                    $scope.blocks.splice(index, 1);

                    //Check if there's any active address
                    var activeAddressExist = false;
                    angular.forEach($scope.blocks, function (block) {
                        if (block.isActive) {
                            activeAddressExist = true;
                            return false;
                        }
                    });
                    //Activate first address if none is active
                    if (!activeAddressExist)
                        $scope.blocks[0].isActive = true;
                };

                $scope.addAddress = function () {
                    if ($scope.blocks.length < 3) {
                        var modalInstance = $modal.open({
                            templateUrl: 'modules/contacts/views/address/addressModal.html',
                            controller: 'AddressController',
                            resolve: {
                                item: {}
                            }
                        });

                        modalInstance.result.then(function (address) {
                            if ($scope.blocks.length === 0)
                                address.isActive = true;

                            $scope.blocks.push(address);
                        });

                    } else {
                        alert('Opps, you can not have more than 3 address at a time');
                    }
                };
            },
            link: function (scope, element, attrs) {
                scope.viewOnly = (attrs.addressViewOnly && attrs.addressViewOnly !== 'false');
            }
        };
    }
]);
