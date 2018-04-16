module.exports = [
	{name: "Openload", urlpattern: /https?:\/\/(?:www\.)?(?:openload\.(?:co|io|link)|oload\.(?:tv|stream|site|xyz))\/(?:f|embed)\/([a-zA-Z0-9-_]+)/i, extract: require("./extract-openload")},
	{name: "Rutube", urlpattern: /https?:\/\/rutube\.ru\/(?:video|(?:play\/)?embed)\/(?:[A-Za-z0-9])(?:\?p=[A-Za-z0-9])?/i, extract: require("./extract-rutube")},
	{name: "Streamango", urlpattern: /https?:\/\/(?:www\.)?streamango\.com\/(?:f|embed)\/([^\/?#&]+)/i, extract: require("./extract-streamango")},
	{name: "Mystream.la", urlpattern: /https?:\/\/(?:www\.)?mystream\.la\/(?:external\/|embed-)?[a-zA-Z0-9-_](?:\.html)?/i, extract: require("./extract-mystreamla")},
	{name: "Other", urlpattern: /https?:\/\/.+/i, extract: require("./extract-other")}
]
