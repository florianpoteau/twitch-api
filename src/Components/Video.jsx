import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Video = ({video, width, height}) => {

  const thumbnailUrl = video.thumbnail_url.replace("{width}", width).replace("{height}", height);
    
    return (
        <Card key={video.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={thumbnailUrl} />
          <Card.Body style={{ position: 'relative' }}>
            <Card.Title>{video.title}</Card.Title>
            <Card.Text className='mb-5'>
              {video.game_name}
            </Card.Text>
            <Button as={Link} to={"/stream/"+ video.id} variant="primary" style={{ position: 'absolute', bottom: '10px', left: '10px' }}>Voir le stream</Button>
          </Card.Body>
        </Card>
      );
};

export default Video;
