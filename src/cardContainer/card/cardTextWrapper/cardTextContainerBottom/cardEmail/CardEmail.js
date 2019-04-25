import React from 'react';


const CardEmail = props => {

	let email = (!props.email) ? '' : <p className="card__email">{props.email}</p>;
	return email;
}

export default CardEmail