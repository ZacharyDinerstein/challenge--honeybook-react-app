import React from 'react';

const Divider = props => {

	let divider;
	const line = props.job.length + props.company.length + 3;

	return divider = (!props.job || !props.company || line > 31) ? '' : <p className="card__text--divider">|</p>;

}

export default Divider