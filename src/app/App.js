import React from 'react';
import logo from '../logo.svg';
import './App.scss';
import '../card/Card.scss';
import { Card } from '../card/Card.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfCards: 5
    };
  }

  renderCards(){
    let cards = [];

    for (let i = 0; i < this.state.numOfCards; i++){
      cards.push(this.renderCard(i));
    }

    return cards;
  }

  renderCard(i){
    return (
      <Card key={i} />
    );
  }


  render(){
    return (
      <div className="card-container">
        <div className="row">
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default App;
