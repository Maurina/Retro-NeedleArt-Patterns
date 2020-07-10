import React from 'react';
import './App.css';

import Header from './Header/Header';
import Tatting from './Tatting/Tatting';
import Footer from './Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header userName=""/>
      <Tatting/>
    
      <Footer/>
    </div>
  );
}

export default App;
