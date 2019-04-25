import React from 'react';

const CardTextWrapper = props => {

	let divider;
	let jobTitle;
	let companyName;
	let phoneBlock;
	let email;

	const line = props.job.length + props.company.length + 3;

	if (!props.job || !props.company || line > 31) {
		divider = '';
	} else {
		divider = <p className="card__text--divider">|</p>;
	}

	jobTitle = (!props.job) ? '' : <p className="card__job-title">{props.job}</p>;
	companyName = (!props.company) ? '' : <p className="card__company-name">{props.company}</p>;
	phoneBlock = (!props.phone) ? '' : <div className="card__phone-num-wrapper"><p className="card__phone-num--label">Phone Number</p><p className="card__phone-num">{props.phone}</p></div>;
	email = (!props.email) ? '' : <p className="card__email">{props.email}</p>;


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
			<div className="card__text-container--bottom card__sub-text-container">
				{phoneBlock}
				{email}
			</div>
		</div>
	);
}

export  default CardTextWrapper