const browserify = require("browserify");
const fs = require("fs");
const minify = require("babel-minify");

fs.stat("bin/", function(err, stats){
	if(err){
		process.stdout.write("Create the bin/ directory...	");
		fs.mkdirSync("bin/");
		process.stdout.write("DONE\n");
	}

	process.stdout.write("Bundle JS code...			");
	let fileWriteStream = fs.createWriteStream("bin/streamcleaner.js", {flags: "w+"});
	let codeStream = browserify("./src/index.js").bundle();
	codeStream.pipe(fileWriteStream);
	let inputCode = "";
	codeStream.on("data", function(chunk){
		inputCode += chunk;
	});
	codeStream.on("end", function(){
		process.stdout.write("DONE\n");

		process.stdout.write("Minify...				");
		let outputCode = minify(inputCode).code;
		fs.writeFileSync("bin/streamcleaner.min.js", outputCode);
		process.stdout.write("DONE\n");
	});
});
