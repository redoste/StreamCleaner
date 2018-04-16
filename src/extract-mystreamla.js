const log = require("./log");

module.exports = function(){
	let videoUrl = document.getElementsByClassName("jw-video")[0].src;
	log("Mystream.la Url: " + videoUrl);
}
