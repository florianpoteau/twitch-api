// CarouselVideo.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { TwitchEmbed } from 'react-twitch-embed';


const CarouselStream = ({ streams }) => {
    console.log(streams);

    return (
<>
        <Carousel style={{ width: "100%", height: `500px`, marginBottom:"17.%" }}>
            {streams.map((stream) => (
                <Carousel.Item key={stream.id}>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="row w-100">
                               <div className="col-md-6">
                                        <Link to={"/stream/" + stream.user_id}>
                                        <TwitchEmbed
                                            channel={stream.user_name}
                                            id={stream.user_id}
                                            theme="dark"
                                            muted
                                            onVideoPause={() => console.log(':Video paused')}
                                            onVideoPlay={() => console.log(':Video played')}
                                            withChat={false}
                                            width={"150%"}
                                        />
                                        </Link>

                                </div>
                                <div className="col-md-6 text-white col-sm">
                                    <div className="container">
                                        <div className="d-flex justify-content-center pt-2 bg-dark" style={{minHeight: "480px", marginLeft: "40%"}}>
                                            <div>
                                                <h2 className='text-center'>{stream.game_name}</h2>
                                                <p className='text-center'>{stream.title}</p>
                                                <p className='text-center'>{stream.viewer_count} spectateurs</p>

                                                {stream.tags ? (
                                                    <ul className="d-flex flex-wrap justify-content-around">
                                                        {stream.tags.map((tag, index) => (
                                                            index % 2 === 0 && (
                                                                <div key={index} className="d-flex justify-content-around flex-wrap w-100">
                                                                    {stream.tags.slice(index, index + 2).map((tagSlice, subIndex) => (
                                                                        <li
                                                                            style={{ paddingLeft: "0" , minWidth: "25%"}}
                                                                            className="list-group-item text-white bg-secondary p-2 text-center mb-3"
                                                                            key={index + subIndex}
                                                                        >
                                                                            {tagSlice}
                                                                        </li>
                                                                    ))}
                                                                </div>
                                                            )
                                                        ))}
                                                    </ul>
                                                    ) : (
                                                        <p>No tags available.</p>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Carousel.Item>
            ))}
        </Carousel>
        </>
    );
};

export default CarouselStream;
