import React from 'react';

const CardCompanyname = props => {

	let companyName;
	return companyName = (!props.company) ? '' : <p className="card__company-name">{props.company}</p>;

}

export default CardCompanyname