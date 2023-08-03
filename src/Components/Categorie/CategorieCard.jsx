import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CategorieCard = (categorie) => {

  console.log(categorie.categorie);

    return (<>
        <Card className='mb-4' style={{ width: '15%', minHeight: "400px" }}>
        <Link to={"/parcourir/" + categorie.categorie.id} className='text-black text-decoration-none'>
      <Card.Img variant="top" src={categorie.categorie.box_art_url} />
      </Link>
      <Card.Body>
        <Card.Title>{categorie.categorie.name}</Card.Title>
        <Link to={"/parcourir/" + categorie.categorie.id} className='text-black text-decoration-none'>
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