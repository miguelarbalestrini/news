import API_TOKEN from "./key.js"

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bing-news-search1.p.rapidapi.com/news?originalImg=true&cc=us&safeSearch=Off&textFormat=Raw",
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