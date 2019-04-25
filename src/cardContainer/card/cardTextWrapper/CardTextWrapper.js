import React from 'react';
import CardTextContainerTop from './cardTextContainerTop/CardTextContainerTop.js';
import CardTextContainerBottom from './cardTextContainerBottom/CardTextContainerBottom.js';


const CardTextWrapper = props => {

	return (
		<div className="card__text-wrapper">
			<CardTextContainerTop name={props.name} job={props.job} company={props.company} />
			<CardTextContainerBottom phone={props.phone} email={props.email} />
		</div>
	);
}

export  default CardTextWrapper