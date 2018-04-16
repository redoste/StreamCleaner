const log = require("./log");

module.exports = function(){
	let iframes = document.getElementsByTagName("iframe");
	for(let iframe of iframes){
		log("Iframe found: " + iframe.src);
	}
}
