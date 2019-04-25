import React from 'react';


const CardEmail = props => {

	let email;
	return email = (!props.email) ? '' : <p className="card__email">{props.email}</p>;
}

export default CardEmail