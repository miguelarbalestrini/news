const URL = `/.netlify/functions/fetch-news`;

const request = () => ($.ajax(URL).done(function (response) {
    console.log(JSON.parse(response));
}))


export default request;