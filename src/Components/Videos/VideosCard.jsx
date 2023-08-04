import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const VideosCard = ({ videos }) => {
  console.log(videos);

  const imageUrl = videos.thumbnail_url
    ? videos.thumbnail_url.replace('{width}', '500').replace('{height}', '300')
    : 'default_image_url.jpg';

  return (
    <>
      {videos.map((video) => (
        <Link className='text-decoration-none' to={video.url}>
        <Card style={{ width: '18rem' }} key={video.id}>
          <Card.Img variant="top" src={imageUrl} /> {/* Display the image here */}
          <Card.Body>
            <Card.Title>{video.title}</Card.Title>
            <Card.Text>
              {video.created_at}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Link to={video.url}>Voir la vidéo</Link>
          </Card.Body>
        </Card>
        </Link>
      ))}
    </>
  );
};

export default VideosCard;
