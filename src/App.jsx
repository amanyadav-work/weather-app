import Navbar from './components/Navbar';
import Foooter from './components/Foooter';
import './App.css';
import React from 'react'
import Weather from './components/Weather';
function App() {

  return (
 
    <>
<Navbar/>
<Weather weatherAPIkey='68afe908fee842648253ff2d5701ddf6'/>
<Foooter/>
    </>

  );
}

export default App;
