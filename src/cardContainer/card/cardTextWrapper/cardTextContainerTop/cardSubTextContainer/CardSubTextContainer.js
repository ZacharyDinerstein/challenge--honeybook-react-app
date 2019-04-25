import React from 'react';


const CardSubTextContainer = props => {

	let divider;
	let jobTitle;
	let companyName;

	const line = props.job.length + props.company.length + 3;

	if (!props.job || !props.company || line > 31) {
		divider = '';
	} else {
		divider = <p className="card__text--divider">|</p>;
	}

	jobTitle = (!props.job) ? '' : <p className="card__job-title">{props.job}</p>;
	companyName = (!props.company) ? '' : <p className="card__company-name">{props.company}</p>;


	return (
		<div className="card__sub-text-container">
			{jobTitle}
			{divider}
			{companyName}
		</div>
	);
}

export  default CardSubTextContainer