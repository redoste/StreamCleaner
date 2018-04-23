//extract-streamango: Module to extract videos from Streamango

const log = require("./log");

/*
	extract-streamango(): @param callback: function(videos) Called when the parsing is finished
			      @return: void
*/

module.exports = function(callback){

	function decodeURL(url, value){
		let ALPHABET = '=/+9876543210zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA';
		let decoded = '';
		let sm = [null, null, null, null];
		let i = 0;
		let str_len = url.length;
		while (i < str_len){
			for (let j = 0; j < 4; j++){
				sm[j % 4] = ALPHABET.indexOf(url[i]);
				i += 1;
			}
			char_code = ((sm[0] << 0x2) | (sm[1] >> 0x4)) ^ value;
			decoded += String.fromCharCode(char_code);
			if (sm[2] != 0x40){
				char_code = ((sm[1] & 0xf) << 0x4) | (sm[2] >> 0x2);
				decoded += String.fromCharCode(char_code);
			}
			if (sm[3] != 0x40){
				char_code = ((sm[2] & 0x3) << 0x6) | sm[3];
				decoded += String.fromCharCode(char_code);
			}
		}
		return decoded
	}

	let allFormats = /({[^}]*\bsrc\s*:\s*[^}]*})/.exec(document.documentElement.innerHTML);
	let output = [];
	for(format of allFormats){
		let encodedUrl = /src\s*:\s*[^(]+\(([^)]*)\)[\s,]*/.exec(format);
		let formatDetail = format.replace(encodedUrl[0], "");
		let encodedUrlValue = encodedUrl[1].split(",")[1];
		encodedUrl = encodedUrl[1].split(",")[0].split("'")[1];
		decodedUrl = decodeURL(encodedUrl, encodedUrlValue);
		let formatOutput = {
			url: decodedUrl,
			info: /^{.*?height:\s*?([0-9]+),.*}$/.exec(formatDetail)[1] + "p"
		};
		output.push(formatOutput);
	}
	callback(output);
}
