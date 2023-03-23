import './App.css';
import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Pokedex from './Components/Pokedex';

function App() {

  return (
    <>
      <Pokedex />
    </>
  );
}

export default App;
