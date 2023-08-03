import axios from "axios";
import { urlCategories, urlStream, urlUser} from "./uri";

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

function fetchUser(id){
    return axios.get(urlUser, {
        params: {
            user_id: id
        }
    })
}

export default{
    fetchCategories,
    fetchStreamByCategorie,
    fetchStream
}