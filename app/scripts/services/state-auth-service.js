/*
Comments:


UI router events:

			$stateChangeStart, $stateChangeSuccess, $viewContentLoaded, $viewContentLoading, $stateChangeError

Example use:

			$rootScope.$on('$stateChangeError', function (event, toState) {
				if(toState === 'userInfo') {
					alert('you do not have access to info because youre not logged in') {
						$state.go('login');
					}
				}
			});



*/

angular.module('sampleApp')

.factory('stateAuthService', function ($state, $rootScope) {

	var User = {
		id: 1984620374123,
		role: 'user'
	};

	return {
		listen: function () {

			$rootScope.$on('$stateChangeStart', function (event, toState, toStateParams, fromState, fromStateParams) {

				if(toState.data.auth.permissions.indexOf(User.role) === -1) {
					event.preventDefault();
					alert('you do not have permission to go there!');
				}

			});

		},
		destroy: function () {
			// can cleanup listeners if we want
		}
	}

});
