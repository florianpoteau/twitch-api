// CarouselVideo.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const CarouselStream = ({ streams, width, height }) => {
    console.log(streams);
    const resizedStreams = streams.map((stream) => ({
        ...stream,
        thumbnail_url: stream.thumbnail_url.replace("{width}", width).replace("{height}", height),
    }));

    return (
<>


        <Carousel style={{ width: "100%", height: `${height}px`, marginBottom: "15%" }}>
            {resizedStreams.map((stream) => (
                <Carousel.Item key={stream.id}>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="row w-100">
                                <div className="col-md-6"> {/* Image Column */}
                                    <div style={{ height: `${height}px`, width: `${width}%` }}>
                                        <Link to={"/stream/" + stream.user_id}>
                                        <img
                                            className="img-fluid"
                                            src={stream.thumbnail_url}
                                            alt={stream.title}
                                            style={{ height: "100%", width: "19.5%", objectFit: "cover", position: "relative" }}
                                        />
                                        </Link>

                                    <div className='container bg-danger pt-2 text-center' style={{position: "absolute" , top: 0, left: 11, width: "6%"}}>
                                    <p className='text-white'>{stream.type.toUpperCase()}</p>
                                    </div>

                                    </div>
                                </div>
                                <div className="col-md-6 text-white col-sm">
                                    <div className="container">
                                        <div className="d-flex justify-content-center pt-2 bg-dark" style={{minHeight: "400px", marginLeft: "10%"}}>
                                            <div>
                                                <h2 className='text-center'>{stream.game_name}</h2>
                                                <p className='text-center'>{stream.title}</p>
                                                <p className='text-center'>{stream.viewer_count} spectateurs</p>

                                                {stream.tags ? (
                                                    <ul className="d-flex flex-wrap justify-content-around">
                                                        {stream.tags.map((tag, index) => (
                                                            index % 3 === 0 && (
                                                                <div key={index} className="d-flex justify-content-around flex-wrap w-100">
                                                                    {stream.tags.slice(index, index + 3).map((tagSlice, subIndex) => (
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
