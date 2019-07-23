# StreamCleaner

A bookmarklet for extract direct links of videos on streaming platforms.

## :warning: DON'T USE THIS ANYMORE. PREFER [youtube-dl](https://ytdl-org.github.io/youtube-dl/index.html).

## Feature

Compatible streaming platforms:
* ![Rutube](https://raw.githubusercontent.com/redoste/StreamCleaner/master/img/rutube.png)Rutube
* ![Openload](https://raw.githubusercontent.com/redoste/StreamCleaner/master/img/openload.png)Openload
* ![Streamango](https://raw.githubusercontent.com/redoste/StreamCleaner/master/img/streamango.png)Streamango
* ![Mystream.la](https://raw.githubusercontent.com/redoste/StreamCleaner/master/img/mystreamla.png)Mystream.la

If you use StreamCleaner on a non-compatible web site, it will search for iframes and will list it.

## Installation and usage

Create a new bookmark in your browser and copy this code in the URL field:
```javascript
javascript:(function(){let a=function(b,c){let d;if("undefined"!=typeof XMLHttpRequest)d=new XMLHttpRequest;else try{d=new ActiveXObject("Microsoft.XMLHTTP")}catch(f){return void alert("Use a recent browser. Please...")}d.onreadystatechange=function(){4>d.readyState||200!==d.status||4===d.readyState&&c(d.responseText)},d.open("GET",b,!0),d.send(null)};a("https://raw.githubusercontent.com/redoste/StreamCleaner/master/bin/streamcleaner.min.current.js",function(b){a("https://raw.githubusercontent.com/redoste/StreamCleaner/master/bin/"+b,function(c){let d=document.createElement("script");d.innerHTML=c,document.getElementsByTagName("body")[0].appendChild(d)})})})();
```

To use it, click on the bookmark when you are in the we site were you want to extract the video.

## Build

To manually build StreamCleaner you need `nodejs` and `npm` or `yarn`.
* [NodeJS](https://nodejs.org/)
* [NPM](https://www.npmjs.com/)
* [Yarn](https://yarnpkg.com/)

First download the source code of StreamCleaner:
If you have git use `git clone`
```
git clone https://github.com/redoste/StreamCleaner.git
```
Else you can just download the [zip](https://github.com/redoste/StreamCleaner/archive/master.zip) and extract it.

Then you need to download dependencies for building:
Go to the folder where you have the StreamCleaner source code using `cd` and execute:
```
npm install
```
If you use npm. If you prefer yarn execute:
```
yarn
```

When all the dependencies have been downloaded you can start the build:
```
npm run-script build
```
Or
```
yarn build
```
if you use Yarn.

The `bin` folder contain the output of the compilation. There are 2 files:
* `steamcleaner.js` The bundle containing all the Javascript source
* `streamcleaner.min.js` Minified version of the bundle

## Credits

A lot of extraction technique and regular expression have been inspired of [youtube-dl](https://github.com/rg3/youtube-dl/)

## Warning

Some Website can ban the usage of this kind of tool. You are the only responsible of the usage of StreamCleaner.
