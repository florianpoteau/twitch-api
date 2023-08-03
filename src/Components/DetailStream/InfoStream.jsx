import React from 'react';

const InfoStream = ({ stream }) => { // Utiliser la déstructuration ici

    console.log(stream);

    if (!stream) {
        return <div>Loading...</div>;
    }

    const imageUrl = stream.thumbnail_url
        ? stream.thumbnail_url.replace('{width}', '1000').replace('{height}', '700')
        : 'default_image_url.jpg';

    return (
        <>
            <img className="m-5" src={imageUrl} alt="image" />

            <div className='bg-dark m-5 p-4' style={{minWidth:"160%", marginRight: "100%"}}>
                <h3 className='text-white m-5 text-center'>{stream.user_name}</h3>
                <h4 className='text-white m-5'>{stream.game_name}</h4> 
                <h5 className="text-white m-5">{stream.title}</h5>

                <div className='d-flex justify-content-around'>
                    {stream.tags.map((tag, index) => (
                        <li className="list-group-item text-white bg-secondary p-2" key={index}>
                            {tag}
                        </li>
                    ))}
                </div>
            </div>
        </>
    );
};

export default InfoStream;
