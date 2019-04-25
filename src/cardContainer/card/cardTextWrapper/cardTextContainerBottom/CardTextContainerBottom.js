import React from 'react';
import CardPhoneBlock from './cardPhoneBlock/CardPhoneBlock.js';
import CardEmail from './cardEmail/CardEmail.js';


const CardTextContainerBottom = props => {

	return (
		<div className="card__text-container--bottom card__sub-text-container">
			<CardPhoneBlock phone={props.phone} />
			<CardEmail email={props.email}/>
		</div>
	);
}

export  default CardTextContainerBottom