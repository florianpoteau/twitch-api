import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import videoService from '../Services/videoService';
import InfoStream from '../Components/DetailStream/InfoStream';

const StreamDetail = () => {
    const { id } = useParams();
    const [stream, setStream] = useState(null);

    const fetchStream = async () => {
        try {
            let response = await videoService.fetchStream(id);
            setStream(response.data.data[0]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchStream();
    }, [id]);

    

    return (
        <>
            <div className="container">
                <div className="row align-items-center">

                    {/* Premiere colonne pour récupérer le stream et info */}
                    <div className="col-md-6">

                        < InfoStream stream={stream} />

                    </div>
                    <div className="col-md-6">
                        {/* 2 eme colonne pour récupérer le tchat du stream */}


                    </div>
                </div>
            </div>
        </>
    );
};

export default StreamDetail;
