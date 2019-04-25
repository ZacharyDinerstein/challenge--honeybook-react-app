import React from 'react';

const Divider = props => {

	let line = props.job.length + props.company.length + 3;
	let divider = (!props.job || !props.company || line > 31) ? '' : <p className="card__text--divider">|</p>;

	return divider;

}

export default Divider