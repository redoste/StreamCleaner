//extract-mystreamla: Module to extract videos from mystream.la

const log = require("./log");

/*
	extract-mystreamla(): @param callback: function(videos) Called when the parsing is finished
									 			@return: void
*/

module.exports = function(callback){
	let videoUrl = document.getElementsByClassName("jw-video")[0].src;
	callback([{url: videoUrl, info: null}]);
}
