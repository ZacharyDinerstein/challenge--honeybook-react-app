import React from 'react';

const CardImgWrapper = props => {
	return (
		<div className="card__img-wrapper">
			<img src={props.profileImage} alt="" className="card__img--profile-image" />
			<img src={props.icon} alt="" className="card__img--icon" />
		</div>
	);
}

export  default CardImgWrapper