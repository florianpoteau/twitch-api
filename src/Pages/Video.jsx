import React, { useEffect, useState } from 'react';
import VideosCard from '../Components/Videos/VideosCard';
import videoService from '../Services/videoService';
import { useParams } from 'react-router-dom';

const Video = () => {

    const {user_id} = useParams();
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        try {
            let response = await videoService.fetchVideos(user_id);
            setVideos(response.data.data)
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchVideos();
    }, [user_id]);

    

    return (
        <>
        <div className='d-flex justify-content-around flex-wrap gap-5'>
            <VideosCard videos= {videos} key={videos.id} />
        </div>
        </>
    );
};

export default Video;