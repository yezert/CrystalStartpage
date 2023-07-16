// var axios = require("axios");
// var cheerio = require("cheerio");

var urls = {
	google: "https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=",
	ddg: "https://duckduckgo.com/ac/?kl=wt-wt&q=",
	bing: "https://www.bingapis.com/api/v7/suggestions?appid=6D0A9B8C5100E9ECC7E11A104ADD76C10219804B&q=",
	qwant: "https://api.qwant.com/api/suggest/?client=opensearch&q=",
	yahoo: "https://api.search.yahoo.com/sugg/gossip/gossip-in-ura?output=sd1&command=",
	startpage: "https://www.startpage.com/do/suggest?query=",
	dogpile: "https://www.dogpile.com/suggestions?q=",
	swisscows: "https://swisscows.com/api/suggestion/suggest?query=",
	ask: "https://amg-ss.ask.com/query?q=",
	brave: "https://search.brave.com/api/suggest?q=",
};
// async function qwant(q: string) {
// 	var op = await axios(urls.qwant + q);
// 	return [].concat.apply([], op.data);
// }
async function bing(q: string) {
	var req = await fetch(urls.bing + q);
	let sug = await req.json();
	// console.log(x);
	return sug.suggestionGroups[0].searchSuggestions.map((x: { displayText: any }) => x.displayText);
}

export default async function (q: string) {
	return await bing(q);
}
