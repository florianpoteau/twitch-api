
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './Pages/Accueil';
import Header from './Components/Navbar/Header';
import { useEffect } from 'react';
import auth from "./Services/auth";
import Categorie from './Pages/Categorie';
import StreamCategorie from './Pages/StreamCategorie';
import StreamDetail from './Pages/StreamDetail';
import Video from './Pages/Video';
import Sidebar from './Components/Navbar/Sidebar';

function App() {
  useEffect(() => {
    auth.setAxiosToken();
  }, []);

  return <>
  <div style={{backgroundColor: "black"}}>
    <Header/>
    {/* <Sidebar /> */}
  <BrowserRouter>

    <Routes>
      <Route element={
        <Accueil />
      } path={"/"} />
      <Route element={
        <Categorie />
      } path={"/parcourir"} />
      <Route element={
        <StreamCategorie />
      } path={"/parcourir/:categoryId"} />
      <Route element={
        <StreamDetail />
      } path={"/stream/:id"} />
      <Route element={
        <Video />
      } path={"/video/:user_id"} />
    </Routes>

          
  </BrowserRouter>
  </div>
  </>
  
}

export default App;
