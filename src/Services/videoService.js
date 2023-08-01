import axios from "axios";
import { urlStreams } from "./uri";

function fetchVideos() {
    return axios.get(urlStreams);
}

function fetchStream(id) {
    return axios.get(urlStreams + id)
}

export default{
    fetchVideos,
    fetchStream
}