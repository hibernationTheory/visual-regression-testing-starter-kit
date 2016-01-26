var getSelector = require('get-selector-attribute-data');
var captureScreenshots = require('capture-responsive-screenshots');

var casper = require('casper').create();
var fs = require('fs');
var Q = require('q');

console.log('Starting...\n');
var results = getSelector('./config-getAttrData.json').then(function(results) {
	var data = JSON.stringify(results, null, '\t');
	fs.write('./output-linkData.json', data)
	return captureScreenshots('./config-captureScreenshots.json', './output-linkData.json');
}).then(function() {
	console.log('Finished');
	casper.exit();
}).fail(function(error) {
	console.log(error);
	casper.exit();
});