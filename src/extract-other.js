//extract-other: Module to extract Iframes from unknown website

const log = require("./log");

/*
	extract-other(): @param callback: function(iframes) Called when the parsing is finished
									 @return: void
*/
module.exports = function(callback){
	let iframes = document.getElementsByTagName("iframe");
	let output = [{url: null, info: "Some website protect their iframe with the Referer HTTP header. To bypass this limitation click directly on the link."}];
	for(let iframe of iframes){
		output.push({url: iframe.src, info: null});
	}
	callback(output);
}
