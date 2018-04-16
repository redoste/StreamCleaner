const log = require("./log");

module.exports = function(){
	let url = "https://openload.co/stream/";
	url += />\s*([\w-]+~\d{10,}~\d+\.\d+\.0\.0~[\w-]+)\s*</.exec(document.documentElement.innerHTML)[1];
	url += "?mime=true";
	log("Openload URL: " + url);
}
