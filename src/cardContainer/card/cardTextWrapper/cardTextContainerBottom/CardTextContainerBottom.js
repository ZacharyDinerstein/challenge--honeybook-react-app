import React from 'react';
import CardPhoneBlock from './cardPhoneBlock/CardPhoneBlock.js';


const CardTextContainerBottom = props => {

	let email;
	email = (!props.email) ? '' : <p className="card__email">{props.email}</p>;


	return (
		<div className="card__text-container--bottom card__sub-text-container">
			<CardPhoneBlock phone={props.phone} />
			{email}
		</div>
	);
}

export  default CardTextContainerBottom