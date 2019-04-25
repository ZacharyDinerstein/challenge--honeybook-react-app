import React from 'react';

const CardCompanyname = props => {

	let companyName = (!props.company) ? '' : <p className="card__company-name">{props.company}</p>;
	return companyName 

}

export default CardCompanyname