import React from 'react';

const CardTextContainerTop = props => {

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
		<div className="card__text-wrapper">
			<div className="card__text-container--top">
				<h2 className="card__name">{props.name}</h2>
				<div className="card__sub-text-container">
					{jobTitle}
					{divider}
					{companyName}
				</div>
			</div>
		</div>
	);
}

export  default CardTextContainerTop