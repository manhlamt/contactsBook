/**
 * Created by lam on 5/9/15.
 */

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
                };

                $scope.addAddress = function () {
                    if ($scope.blocks.length < 3) {
                        var modalInstance = $modal.open({
                            templateUrl: 'modules/contacts/views/address/addressModal.html',
                            controller: 'AddressController'
                        });

                        modalInstance.result.then(function (address) {
                            $scope.blocks.push(address);
                        });

                    } else {
                        alert('Opps, you can not have more than 3 address at a time');
                    }
                }
            },
            link: function (scope, element, attrs) {

            }
        }
    }
]);
