angular.module('sampleApp')

.directive('fxdMenu', function () {

	return {
		restrict: 'E',

		scope: {
			fxdValue: '='
		},

		bindToController: true,

		controller: 'FxdMenuController as fxdMenu',

		templateUrl: 'fxd-menu',

		compile: function (elem, attrs) {


			// before the element is rendered with a model, what preparation should you do
			// for all fxd-menu, how should they be preset
			return function (scope, elem, attrs, controllers) {

				console.log(elem.find('[fxd-menu-area]'))
				elem.find('[fxd-menu-area]').on('mouseenter', function () {
					console.log('mouse enter!');
				});

				// don't do this, it's tricky
				// scope.doSomethingCool = function () {
				// 	alert('do something cool');
				// }
			};

		}

	}

})

.controller('FxdMenuController', function () {

	this.doSomethingCool = function () {
		alert('hello from controller');
	}

});





/*

var htmlString = '<div>{{thing}} {{fun.somethingElse}}</div>';

var model = {
	thing: 'hello!',
	fun: {
		somethingElse: '9129381723'
	}
};

$interpolate(htmlString)(model); // <div>hello! 9129381723</div>

var p = $parse(htmlString)(model); // <div>hello! 9129381723</div>

p.set('thing', 'goodbye!'); // // <div>goodbye! 9129381723</div>

$compile(htmlString)(model); // <div>hello! 9129381723</div>

model.fun.somethingElse = 123 // <div>hello! 123</div>

// watching data models of controller

var fxdMenuController = controllers[0];

scope.$watch('fxdValue', function () {
	console.log(arguments);
})

scope.$watch(function () {
	return fxdMenuController.fxdValue;
}, function () {
	console.log(arguments);
});

*/


