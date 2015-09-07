'use strict';

// Contacts controller
angular.module('contacts').controller('ContactsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Contacts',
	function($scope, $stateParams, $location, Authentication, Contacts) {
		$scope.authentication = Authentication;

		$scope.gender = 'm';

		$scope.addresses = [];

		$scope.filter = {
			gender: []
		};

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
				$location.path('contacts');

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Contact
		$scope.remove = function(contact) {
			if (confirm('Are you sure you want to delete this contact ?')) {
				if ( contact ) {
					contact.$remove();

					for (var i in $scope.contacts) {
						if ($scope.contacts [i] === contact) {
							$scope.contacts.splice(i, 1);
						}
					}
				} else {
					$scope.contact.$remove(function() {
						$location.path('contacts');
					});
				}
			}
		};

		// Update existing Contact
		$scope.update = function(valid) {
			if (!valid) return false;

			var contact = $scope.contact;

			contact.$update(function() {
				$location.path('contacts/' + contact._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Contacts
		$scope.find = function() {
			console.log($scope.authentication);
			$scope.loading = true;
			$scope.contacts = Contacts.query({
				user: $scope.authentication.user._id
			},function () {
				$scope.loading = false;
			});
			//console.log($scope.contacts);
		};

		// Find existing Contact
		$scope.findOne = function() {
			console.log($stateParams.contactId);
			if ($stateParams.contactId === '') {
				$location.path('contacts');
			} else {
				$scope.loading = true;
				$scope.contact = Contacts.get({
					contactId: $stateParams.contactId
				}, function () {
					$scope.loading = false;
				});
			}
		};

		//Filter list of contacts
		$scope.filterFunction = function (actual, expected) {
			console.log(actual, expected);
			if (Array.isArray(expected)) {
				console.log(expected.length === 0 || expected.indexOf(actual) > -1);
				return expected.length === 0 || expected.indexOf(actual) > -1;
			} else if (typeof  expected == 'string'){
				return actual.toLowerCase().indexOf(expected.toLowerCase()) > -1;
			}
		};

		$scope.toogleFilterSelection = function (string) {
			var idx = $scope.filter.gender.indexOf(string);
			if (idx > -1) {
				$scope.filter.gender.splice(idx, 1);
			} else {
				$scope.filter.gender.push(string);
			}
		};

		$scope.resetFilter = function () {
			$scope.filter = {
				gender: []
			};
		}
	}
]);
