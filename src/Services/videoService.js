import axios from "axios";
import { urlCategories, urlStream, urlUser, urlVideos} from "./uri";

function fetchCategories() {
    return axios.get(urlCategories);
}

function fetchStreamByCategorie(categoryId){
    return axios.get(urlStream, {
        params: {
            game_id: categoryId,
          },
    });
}

function fetchStream(id){
    return axios.get(urlStream, {
        params: {
            user_id: id
        }
    })
}

function fetchVideos(userId){
    return axios.get(urlVideos, {
        params: {
            user_id: userId
        }
    });
}

export default{
    fetchCategories,
    fetchStreamByCategorie,
    fetchStream,
    fetchVideos
}