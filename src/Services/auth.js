import axios from "axios";

function setAxiosToken() {
    axios.defaults.headers['Authorization'] = process.env.REACT_APP_TOKEN;
    axios.defaults.headers['Client-Id'] = process.env.REACT_APP_CLIENT_ID;
}

export default {
    setAxiosToken
}
