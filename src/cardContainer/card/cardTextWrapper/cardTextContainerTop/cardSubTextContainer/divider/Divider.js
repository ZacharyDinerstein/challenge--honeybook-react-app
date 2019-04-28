import React from 'react';

const Divider = props => {

	let divider;

	// If User didn't enter a job or company, divider should be an empty space
	if (!props.job || !props.company) {
		divider = '';

	// else, if the amount of text in the SubTextContainer already caused a line break, 
	// divider should be a <br /> tag. This ensures that there will always be a break
	// between the job and company lines, even if -- after the divider is removed
	// from the dom -- the SubTextContainer is reduced to one line. We want that 
	// line break on the page. 
	} else if (props.textContainerIsMultiLine){
		divider = <br/>;

	// Otherwise, if User job and company are filled in correctly, 
	// and the content of that information doesn't cause a line
	// break, then show the divider. 
	} else {
		divider = <p className="card__text--divider">|</p>;
	}

	return divider;

}

export default Divider