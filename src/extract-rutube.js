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
	let link = document.querySelector("link[rel=canonical]");
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
		let videoM3Upath = JSON.parse(responseText).video_balancer.m3u8;
		getRequest(videoM3Upath, function(responseText){
			let M3Ulines = responseText.split("\n");
			for(l of M3Ulines){
				if(l[0] != "#" && l != "")
					log("Rutube Url: " + l);
			}
		});
	});
}
