import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CategorieCard = ({categorie}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    width: '15%',
    minHeight: '400px',
    // Ajouter les styles spécifiques au survol ici
    border: isHovered ? '2px solid #FF0000' : '1px solid #ccc',
    boxShadow: isHovered ? '-10px 10px 5px #FF0000' : 'none',
    overflow: 'hidden',
  };

  console.log(categorie);

  return (
    <>
      <Card
        className='mb-5 cardCategorie'
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <Link to={"/parcourir/" + categorie.id} className='text-black text-decoration-none'>
          <Card.Img variant="top" src={categorie.box_art_url} style={{transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.3s ease-out'}} />
        </Link>
        <Card.Body>
          <Card.Title>{categorie.name}</Card.Title>
          <Link to={"/parcourir/" + categorie.id} className='text-black text-decoration-none'>
            <div className='d-flex justify-content-center'>
              <Button className='mb-3 mt-4 btn btn-danger' variant="primary">Voir les streams</Button>
            </div>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CategorieCard;
