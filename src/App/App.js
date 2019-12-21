import React from 'react';
import './App.css'
import Routes from '../routes/Routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

require('dotenv').config()

function App() {
  
  return (
    <div className='container'>
      <p className='logo'>
        <FontAwesomeIcon icon={faCoffee} /> aircnc
      </p>
      <div className='content'>
        <Routes/>
      </div>
    </div>
  );
}

export default App;
