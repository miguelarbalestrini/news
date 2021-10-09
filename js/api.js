import API_TOKEN from "./key.js"

const API_URL = "https://bing-news-search1.p.rapidapi.com/news?originalImg=true&cc=us&safeSearch=Off&textFormat=Raw";

const settings = {
	"async": true,
	"crossDomain": true,
	"url":  API_URL,
	"method": "GET",
	"headers": {
		"accept-language": "us",
		"x-bingapis-sdk": "true",
		"x-search-location": "us",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": API_TOKEN
	}
};

export default settings;