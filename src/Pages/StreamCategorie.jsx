import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import videoService from '../Services/videoService';
import StreamByCategorieCard from '../Components/Categorie/StreamByCategorieCard';

const StreamCategorie = () => {
  const { categoryId } = useParams();
  const [streams, setStreams] = useState([]);

  const fetchStreamByCategorie = async () => {
    try {
      let response = await videoService.fetchStreamByCategorie(categoryId);
      setStreams(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStreamByCategorie();
  }, [categoryId]);

  // Filtrer les streams pour afficher uniquement les streams de la catégorie sélectionnée

  return (
    <div className='d-flex justify-content-around flex-wrap'>

        <StreamByCategorieCard key={streams.id} gameId= {streams} />
    </div>
  );
};

export default StreamCategorie;
