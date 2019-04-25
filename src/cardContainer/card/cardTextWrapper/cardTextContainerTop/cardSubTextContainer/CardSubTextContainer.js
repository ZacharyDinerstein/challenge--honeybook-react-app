import React from 'react';
import CardJobTitle from './cardJobTitle/CardJobTitle.js';
import CardCompanyName from './cardCompanyName/CardCompanyName.js';
import Divider from './divider/Divider.js';


const CardSubTextContainer = props => {

	return (
		<div className="card__sub-text-container">
			<CardJobTitle job={props.job} />
			<Divider job={props.job} company={props.company} />
			<CardCompanyName company={props.company} />
		</div>
	);
}

export  default CardSubTextContainer