import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const StreamByCategorieCard = ({ gameId }) => {
  console.log(gameId);

  return (
    <>
      {gameId.map((game) => {
        // Remplacer "{width}" et "{height}" dans l'URL de l'image par les dimensions souhaitées (par exemple 300x200)
        const imageUrl = game.thumbnail_url.replace("{width}", "300").replace("{height}", "200");

        return (
          <Card className='mb-3 mt-4' style={{ width: '18rem' }} key={game.id}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>{game.game_name}</Card.Title>
              <Card.Text>
                {game.title}
              </Card.Text>
              <Link to={"/stream/" + game.user_id}>
              <Button className='btn btn-danger' variant="primary">Regarder le stream</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default StreamByCategorieCard;
