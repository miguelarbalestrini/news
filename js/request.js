import settings from "./api.js";

const request = () => ($.ajax(settings).done(function (response) {
    console.log(response);
}))

export default request;