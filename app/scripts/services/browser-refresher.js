angular.module('sampleApp')

.provider('browserRefresher', function () {

	return {
		milliseconds: 3000,
		$get: function () {
			return {
				refresh: function () {
					alert('haha! refresh');
				}
			}
		}
	}

});