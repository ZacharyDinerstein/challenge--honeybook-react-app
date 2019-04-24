import React from 'react';
import ReactDOM from 'react-dom';
import '../card/Card.scss';
import { Card } from '../card/Card.js';


export class Card extends React.Component {
	render(){
		return (
          <div className="container">
			<main className="card-container">
              <div className="row">
                {this.renderCards()}
              </div>
        	</main>
          </div>
		);
	}
}