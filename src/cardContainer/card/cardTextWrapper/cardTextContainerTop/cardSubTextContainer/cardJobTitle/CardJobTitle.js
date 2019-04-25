import React from 'react';

const CardJobTitle = props => {

	let jobTitle;
	return jobTitle = (!props.job) ? '' : <p className="card__job-title">{props.job}</p>;

}

export default CardJobTitle