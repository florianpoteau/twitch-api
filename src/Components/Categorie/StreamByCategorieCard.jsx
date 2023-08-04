import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const StreamByCategorieCard = ({ gameId }) => {
  console.log(gameId);

  // State pour le hover des cards
  const [hoverStates, setHoverStates] = useState(gameId.map(() => false));

  // Paramétrer le hover a true
  const handleMouseEnter = (index) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = true;
    setHoverStates(updatedHoverStates);
  };

  // paramétrer le hover a false
  const handleMouseLeave = (index) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = false;
    setHoverStates(updatedHoverStates);
  };

  // Style des cards sans hover

  const cardStyle = {
    width: '18rem',
    minHeight: '400px',
    // Styles communs sans border et boxShadow
    border: '1px solid #ccc',
    overflow: 'hidden',
  };

  return (
    <>
      {gameId.map((game, index) => {
        // Remplacer "{width}" et "{height}" dans l'URL de l'image par les dimensions souhaitées (par exemple 300x200)
        const imageUrl = game.thumbnail_url.replace("{width}", "300").replace("{height}", "200");

        const isHovered = hoverStates[index];

        // Style des cards avec hover
        const cardStyleWithHover = {
          ...cardStyle,
          // Les styles de bordure et de boxShadow s'appliquent uniquement au survol
          border: isHovered ? '2px solid #FF0000' : '1px solid #ccc',
          boxShadow: isHovered ? '-10px 10px 5px #FF0000' : 'none',
        };

        return (
          <Card className='mb-3 mt-4' style={isHovered ? cardStyleWithHover : cardStyle} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)} key={game.id}>
            <Card.Img variant="top" src={imageUrl} style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.3s ease-out' }} />
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
