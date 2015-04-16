var express = require('express'),
	app = express(),
    cons = require('consolidate'),
    mainBowerFiles = require('main-bower-files'),
    sourceDir = __dirname + '/app',
    glob = require('glob'),
	bowerScripts = mainBowerFiles().map(function (script) {
		return convertAbsoluteScriptPathToRelative(script);
	});

function convertAbsoluteScriptPathToRelative(absPath) {
	return absPath.split(sourceDir)[1];
}
 
app.set('port', 5000);
app.set('views', sourceDir); // this is really only set for index.html
app.engine('html', cons.handlebars);
app.set('view engine', 'html');

app.use(express.static(sourceDir, {
	index: false
}));

app.get('/*', function (req, res) {

	glob(sourceDir + '/scripts/*.js', {}, function (err, files) {

		var relativePaths = files.map(function (file) {
			return convertAbsoluteScriptPathToRelative(file);
		});

		res.render('index.html', {
			scripts: bowerScripts.concat(relativePaths)
		});

	});

});

app.listen(app.get('port'), function () {
	console.log('Running at http://localhost:' + app.get('port'));
});