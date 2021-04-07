import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css';
import LoginPage from './component/LoginPage'
import Photos from './component/Photos'

function App() {
  let [search, setSearch] = useState("");
  let [photos, setPhotos] = useState([]);

  const onInputChange = (e) => {

    setSearch(search = e.target.value);
  }
  useEffect(() => {
    getPhotos();
  }, []);
  const getPhotos = async () => {
    const result = await Axios.get(`https://api.unsplash.com/photos/?client_id=NRRqUsw70p3D2qokVBHfUYceoxKWXQznF3fxl-CSYWQ`);
    console.log(result)
    setPhotos(result.data)

  }
  const onSearchClick = () => {
    getPhotos();
  }

  return (
    <div className="App">
      <LoginPage search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}></LoginPage>
      <div className="container">
        
        <Photos photos={photos}></Photos>
      </div>
    </div>
  );
}

export default App;
