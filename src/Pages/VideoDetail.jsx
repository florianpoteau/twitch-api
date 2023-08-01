import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import videoService from '../Services/videoService';

const VideoDetail = () => {

    const {id} = useParams();
    const [stream, setStream] = useState([]);

    const fetchStreamById = async () => {
        try {
            let response = await videoService.fetchStream(id);
            setStream(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchStreamById()
    }, [])    

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default VideoDetail;