const log = require("./log");

module.exports = function(callback){
	let iframes = document.getElementsByTagName("iframe");
	let output = [];
	for(let iframe of iframes){
		output.push(iframe.src);
	}
	callback(output);
}
