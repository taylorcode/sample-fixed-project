angular.module('sampleApp')

.controller('AboutController', function (userAccountData, $scope) {

	this.thing = 'HAHA';

	this.stuff = 'asdasd';

	window.AboutController = this;

});