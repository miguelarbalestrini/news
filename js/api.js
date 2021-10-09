import API_URL from "/.netlify/functions/API_URL";
import API_TOKEN from "/.netlify/functions/API_TOKEN";

const settings = {
	"async": true,
	"crossDomain": true,
	"url": API_URL,
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