const log = require("./log");

module.exports = function(){
	function getRequest(url, callback) {
		let xhr;
		if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
		else{ alert("Use a recent browser");  return;}
		xhr.onreadystatechange = function() {
			if(xhr.readyState < 4) { return; }
			if(xhr.status !== 200) { return; }
			if(xhr.readyState === 4) { callback(xhr.responseText); }
		}		
		xhr.open('GET', url, true);
		xhr.send(null);
	}
	for(link of document.getElementsByTagName("link")){
		if(link.rel == "canonical"){
			let parser = document.createElement("a");
			parser.href = link.href;
			let videoId = /^\/?video\/(.+?)\/?$/.exec(parser.pathname)[1];
			let isPrivate = false;
			let privateKey = "";
			if(videoId.split("/")[0] == "private"){
				videoId = videoId.split("/")[1];
				isPrivate = true;
				privateKey = "&p=" + parser.search.split("p=")[1];
			}

			getRequest(location.protocol + "//rutube.ru/api/play/options/" + encodeURIComponent(videoId) + "/?format=json" + privateKey, function(responseText){
				let videoJSONpath = JSON.parse(responseText).video_balancer.json;
				getRequest(videoJSONpath, function(responseText){
					let formats = JSON.parse(responseText).results;
					for(f of formats){
						log("Rutube Url: " + f);
					}
				});
			});
		}
	}
}
