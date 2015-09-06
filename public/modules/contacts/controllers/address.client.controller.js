/**
 * Created by lam on 5/9/15.
 */

angular.module('contacts').controller('AddressController', ['$scope', '$modalInstance','item',
    function ($scope, $modalInstance, item) {
        console.log(item);
        if (item == undefined)
            $scope.item = {};
        else
            $scope.item = item;

        $scope.save = function (valid) {
            if (valid)
                $modalInstance.close($scope.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
]);
