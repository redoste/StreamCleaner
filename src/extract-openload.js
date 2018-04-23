//extract-openload: Module to extract OpenLoad videos

const log = require("./log");

/*
	extract-openload(): @param callback: function(videos) Called when the parsing is finished
											@return: void
*/
module.exports = function(callback){
	let url = "https://openload.co/stream/";
	url += />\s*([\w-]+~\d{10,}~\d+\.\d+\.0\.0~[\w-]+)\s*</.exec(document.documentElement.innerHTML)[1];
	url += "?mime=true";
	callback([{url: url, info: null}]);
}
