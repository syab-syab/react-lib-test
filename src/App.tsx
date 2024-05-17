import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Bootstrap from './components/Bootstrap';
// import Leaflet from './components/Leaflet';
import Loadersp from './components/Loadersp';
import Typed from './components/Typed';
// import AwesomeSld from './components/AwesomeSld';
// import ImgGallery from './components/ImgGallery';
import TextAreaAuto from './components/TextAreaAuto';
import RandomUUID from './components/RandomUUID';


function App() {

  

  return (
    <>
      {/* <Bootstrap /> */}
      {/* <Leaflet /> */}
      <Loadersp />
      <Typed />
      {/* <AwesomeSld /> */}
      {/* <ImgGallery /> */}
      <TextAreaAuto />
      <RandomUUID />
    </>
  );
}

export default App;
