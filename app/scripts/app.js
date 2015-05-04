angular.module('sampleApp', ['sampleApp:partials', 'ui.router'])

.config(function ($stateProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'home',
		data: {
			title: 'This is the title of the about State',
			auth: {
				permissions: ['user', 'admin', 'guest']
			}
		},
	})

	.state('about', {
		url: '/about',
		templateUrl: 'about',
		controller: 'AboutController as about',

		data: {
			title: 'This is the title of the about State',
			auth: {
				permissions: ['user', 'admin', 'guest']
			}
		},
		thing: 'hello',

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


				return User.getInfo()

				//return $http.get('/api/users')
			}
		}
	})

	.state('about.info', {
		url: '/info',
		templateUrl: 'about.info'
	})

})

.run(function ($rootScope, $state, encryptService, stateAuthService) {

	stateAuthService.listen();

	window.$state = $state;

	$rootScope.$state = $state;

});