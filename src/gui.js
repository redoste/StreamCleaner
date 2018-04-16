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
	this.div.style.top = 0;
	this.div.style.left = 0;
	this.div.style["z-index"] = 1000000;
	this.div.style.width = "100%";
	this.div.style.height = "100%";
	this.div.style["background-color"] = "white";

	let h1 = document.createElement("h1");
	h1.innerText = "Stream Cleaner";
	this.div.appendChild(h1);

	this.p = document.createElement("p");
	this.p.innerText = "Loading...";
	this.div.appendChild(this.p);

	document.body.appendChild(this.div);

	this.finished = function(){
		this.p.innerText = "";
	}
}
