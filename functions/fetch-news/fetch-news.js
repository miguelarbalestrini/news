const process = require('process')
const axios = require('axios')

const { API_TOKEN, API_URL } = process.env

const settings =  {
  method: 'GET',
  url: API_URL,
  params: { originalImg: 'true', cc: 'us', safeSearch: 'Off' },
  "headers": {
    "accept-language": "us",
    "x-bingapis-sdk": "true",
    "x-search-location": "us",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": API_TOKEN
  }
}

const handler = async function (event) {

  try {
    const { data } = await axios(settings)
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    }
  }
}

module.exports = { handler }
