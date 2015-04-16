angular.module('sampleApp', ['sampleApp:partials', 'ui.router'])

.config(function ($stateProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'home'
	})

	.state('about', {
		url: '/about',
		templateUrl: 'about',
		controller: 'AboutController as about',
		resolve: {
			userAccountData: function ($q, $timeout, $http) {

				defer = $q.defer()

				$timeout(function () {
					defer.resolve({
						firstName: 'Taylor',
						lastName: 'McIntyre',
						weight: 175
					})
				}, 100);

				return defer.promise;

				//return $http.get('/api/users')

			}
		}
	})

	.state('about.info', {
		url: '/info',
		templateUrl: 'about.info'
	})

})

.run(function ($state, encryptService) {

	window.$state = $state

});