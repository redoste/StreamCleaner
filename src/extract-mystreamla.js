const log = require("./log");

module.exports = function(callback){
	let videoUrl = document.getElementsByClassName("jw-video")[0].src;
	callback([{url: videoUrl, info: null}]);
}
