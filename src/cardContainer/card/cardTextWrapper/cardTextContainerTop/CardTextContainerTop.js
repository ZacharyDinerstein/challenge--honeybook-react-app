import React from 'react';
import CardName from './cardName/CardName.js';
import CardSubTextContainer from './cardSubTextContainer/CardSubTextContainer.js';


const CardTextContainerTop = props => {

	return (
		<div className="card__text-container--top">
			<CardName name={props.name} />
			<CardSubTextContainer job={props.job} company={props.company} />
		</div>
	);
}

export  default CardTextContainerTop