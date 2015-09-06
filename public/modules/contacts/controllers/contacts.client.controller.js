'use strict';

// Contacts controller
angular.module('contacts').controller('ContactsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Contacts',
	function($scope, $stateParams, $location, Authentication, Contacts) {
		$scope.authentication = Authentication;

		$scope.gender = 'm';

		$scope.addresses = [];

		//Test data
		$scope.addresses = [
			{
				line1: 'Line 1 1 of address',
				line2: 'Line 2 of address',
				postalCode: 'postalCode',
				phone: '091241232',
				isActive: true
			},
			{
				line1: 'Line 1 2 of address asd',
				line2: 'Line 2 of address asd ',
				postalCode: 'postalCodeasdasd',
				phone: '0124123213',
				isActive: false
			}
		];

		// Create new Contact
		$scope.create = function(valid) {
			if (!valid) return false;
			// Create new Contact object
			var contact = new Contacts ({
				name: this.name,
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				phone: this.phone,
				gender: this.gender,
				addresses: this.addresses
			});

			// Redirect after save
			contact.$save(function(response) {
				$location.path('contacts/');

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Contact
		$scope.remove = function(contact) {
			if ( contact ) { 
				contact.$remove();

				for (var i in $scope.contacts) {
					if ($scope.contacts [i] === contact) {
						$scope.contacts.splice(i, 1);
					}
				}
			} else {
				$scope.contact.$remove(function() {
					$location.path('contacts/');
				});
			}
		};

		// Update existing Contact
		$scope.update = function() {
			var contact = $scope.contact;

			contact.$update(function() {
				$location.path('contacts/' + contact._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Contacts
		$scope.find = function() {
			$scope.contacts = Contacts.query();
			//console.log($scope.contacts);
		};

		// Find existing Contact
		$scope.findOne = function() {
			$scope.contact = Contacts.get({ 
				contactId: $stateParams.contactId
			});
		};
	}
]);
