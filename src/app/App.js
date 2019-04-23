import React from 'react';
import logo from '../logo.svg';
import './App.scss';
import '../card/Card.scss';
import { Card } from '../card/Card.js';

function App() {
  return (
    <div className="card-container">
      <Card />
    </div>
  );
}

export default App;
