import axios from "axios";

function setAxiosToken() {
    axios.defaults.headers['Authorization'] = process.env.APP_TOKEN;
    axios.defaults.headers['Client-Id'] = process.env.APP_CLIENT_ID;
}

export default {
    setAxiosToken
}
