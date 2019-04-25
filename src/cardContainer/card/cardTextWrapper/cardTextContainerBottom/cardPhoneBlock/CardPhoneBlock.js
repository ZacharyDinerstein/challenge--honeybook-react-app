import React from 'react';


const CardPhoneBlock = props => {

	let phoneBlock = (!props.phone) ? '' : <div className="card__phone-num-wrapper"><p className="card__phone-num--label">Phone Number</p><p className="card__phone-num">{props.phone}</p></div>;
	return phoneBlock;

}

export default CardPhoneBlock