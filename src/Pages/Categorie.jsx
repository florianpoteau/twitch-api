import React, { useEffect, useState } from 'react';
import videoService from '../Services/videoService';
import { Link } from 'react-router-dom';
import CategorieCard from '../Components/Categorie/CategorieCard';

const Categorie = () => {
  const [Categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      let response = await videoService.fetchCategories();
      setCategories(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const resizedCategories = Categories.map((categorie) => ({
    ...categorie,
    box_art_url: categorie.box_art_url?.replace("{width}", "200").replace("{height}", "250"),
  }));

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center text-danger mb-4">Categories</h1>
      </div>

      <div className="d-flex justify-content-around flex-wrap">
      {resizedCategories.map((categorie, index) => (
          <CategorieCard key={index} categorie={categorie} />
        ))}
      </div>
      
    </>
  );
};

export default Categorie;
