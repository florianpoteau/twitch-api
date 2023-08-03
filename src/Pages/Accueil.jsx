// Accueil.js
import React, { useEffect, useState } from 'react';
import videoService from '../Services/videoService';
import CarouselStream from '../Components/Carousel/CarouselStream';

const Accueil = () => {
    const [streams, setStreams] = useState([]);

    const fetchStream = async () => {
        try {
            let response = await videoService.fetchStream();
            setStreams(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchStream();
    }, []);

    return (
        <div className="container mt-5" style={{paddingBottom: "12%"}}>
            <h1 className="text-center text-danger mb-4">Actuellement en stream</h1>
            <div className="d-flex justify-content-center carousel-container">
                <CarouselStream streams={streams} width={600} height={400}/>
            </div>
        </div>
    );
};

export default Accueil;
