//index: Main module

const log = require("./log");
const gui = require("./gui");

(function(){
	log("loaded");
	log("indentification of this website...");

	let hostersList = require("./hostersList");
	let hoster = null;

	for(hosterIt of hostersList){
		if(hosterIt.urlpattern.test(location.href)){
			log("Found hoster: " + hosterIt.name);
			hoster = hosterIt;
			break;
		}
	}
	let guiInstance = new gui();
	hoster.extract(function(output){
		guiInstance.finished(output);
	});
})();
