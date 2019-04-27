import React from 'react';

const Divider = props => {

	let divider = (props.textContainerIsMultiLine || !props.job || !props.company) ? '' : <p className="card__text--divider">|</p>;

	return divider;

}

export default Divider