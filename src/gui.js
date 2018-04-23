//gui: Module for the managing of the GUI

const log = require("./log");


/*
	gui(): @return: gui object (must be called with `new`)
*/
module.exports = function(){
	// Viewport init
	this.viewport = document.querySelector("meta[name=viewport]");
	if(this.viewport === undefined || this.viewport === null){
		this.viewport = document.createElement("meta");
		this.viewport.name = "viewport";
		document.getElementsByTagName('head')[0].appendChild(this.viewport);
	}
	this.viewportBackup = this.viewport.content
	this.viewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";

	this.div = document.createElement("div");

	this.div.style.position = "absolute";
	this.div.style["z-index"] = 1000000;
	this.div.style["background-color"] = "white";

	let h1 = document.createElement("h1");
	h1.innerText = "Stream Cleaner";
	this.div.appendChild(h1);

	this.infoSpan = document.createElement("span");
	this.infoSpan.appendChild(document.createTextNode("Loading..."));
	this.div.appendChild(this.infoSpan);

	document.documentElement.appendChild(this.div);
	document.body.style.display = "none";

	/*
		gui.finished(): @params urls: Array of videos urls to print to the gui
										@return: void
	*/
	this.finished = function(urls){
		this.infoSpan.remove();
		for(let url of urls){
			log("New link to the gui: " + JSON.stringify(url));
			if(typeof url.url === undefined || url.url === null){
				let strong = document.createElement("strong");
				strong.appendChild(document.createTextNode(url.info));
				this.div.appendChild(strong);
				this.div.appendChild(document.createElement("br"));
			}
			else{
				let a = document.createElement("a");
				a.href = url.url;
				a.appendChild(document.createTextNode(url.url));

				if(typeof url.info !== undefined && url.info !== null){
					let strong = document.createElement("strong");
					strong.appendChild(document.createTextNode(url.info + ": "));
					this.div.appendChild(strong);
				}
				this.div.appendChild(a);
				this.div.appendChild(document.createElement("br"));
			}
		}
	}
}
