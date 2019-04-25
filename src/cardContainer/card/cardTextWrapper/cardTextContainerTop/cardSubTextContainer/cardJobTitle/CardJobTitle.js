import React from 'react';

const CardJobTitle = props => {

	let jobTitle= (!props.job) ? '' : <p className="card__job-title">{props.job}</p>;
	return jobTitle;

}

export default CardJobTitle