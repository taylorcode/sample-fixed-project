angular.module("sampleApp:partials", []).run(["$templateCache", function($templateCache) {$templateCache.put("about","<h1>this is the about view</h1>{{about.stuff}} <input type=\"text\" ng-model=\"about.stuff\"><!-- directive example --><fxd-menu fxd-value=\"about.stuff\"></fxd-menu><div fxd-menu></div><div class=\"fxd-menu\"></div>{{about.thing}} {{$state.current.data.title}} <input type=\"text\" ng-model=\"about.thing\"><div ng-if=\"about.thing.length > 10\"><h3>Hello you can see me</h3></div><button ui-sref=\"about.info\">View Info</button><ui-view></ui-view>");
$templateCache.put("about.info","<h2>this is additional info</h2>");
$templateCache.put("fxd-menu","<span>HELLO</span><button>press me</button> inside of the directive {{fxdMenu.fxdValue}} <button ng-click=\"fxdMenu.doSomethingCool()\">Click Me!</button><div fxd-menu-area>asldkjasldkjaskldjaskldjakl</div>");
$templateCache.put("home","<h1>test view!</h1><a ui-sref=\"about\">Go to about view</a>");}]);