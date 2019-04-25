import React from 'react';
import CardImgWrapper from './cardImgWrapper/CardImgWrapper.js';
import CardTextWrapper from './cardTextWrapper/CardTextWrapper.js';


export class Card extends React.Component {
	render(){
		
		return (
			<div className="col-xs-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-4 col-xl-3">
				<div className="card">
					<CardImgWrapper profileImage={this.props.profileImage} icon={this.props.icon} />
					<CardTextWrapper name={this.props.name} job={this.props.job} company={this.props.company} phone={this.props.phone} email={this.props.email} />
				</div>
			</div>
		);
	}
}