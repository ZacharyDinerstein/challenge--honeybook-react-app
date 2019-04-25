import React from 'react';
import CardImgWrapper from './cardImgWrapper/CardImgWrapper.js';
import CardTextWrapper from './cardTextWrapper/CardTextWrapper.js';


export class Card extends React.Component {
	render(){
		
		return (
			<div className="col-sm-6 col-lg-3">
				<div className="card">
					<CardImgWrapper profileImage={this.props.profileImage} icon={this.props.icon} />
					<CardTextWrapper name={this.props.name} job={this.props.job} company={this.props.company} phone={this.props.phone} email={this.props.email} />
				</div>
			</div>
		);
	}
}