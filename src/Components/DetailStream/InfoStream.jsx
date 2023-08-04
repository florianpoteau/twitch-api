import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TwitchEmbed } from 'react-twitch-embed';

const InfoStream = ({ stream }) => { 

    console.log(stream);

    if (!stream) {
        return <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="primary" />
    </div>
    }


    return (
        <>
        <div className='' style={{ marginTop:"10%"}}>
            <TwitchEmbed 
                channel={stream.user_name}
                id={stream.user_id}
                theme="dark" // Set the theme (options: "light", "dark")
                muted // Mute the video
                onVideoPause={() => console.log(':Video paused')} // Callback when video is paused
                onVideoPlay={() => console.log(':Video played')} // Callback when video is played
                width={"200%"}
                height={"800px"}
            />
            </div>
        </>
    );
};

export default InfoStream;
