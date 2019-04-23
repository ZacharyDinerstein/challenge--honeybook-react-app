import React from 'react';
import ReactDOM from 'react-dom';

export class Card extends React.Component {
	render(){
		return (
			<div className="col-sm-6  col-lg-3">
		        <div className="card">
		          <div className="card__img-wrapper">
		            <img src={this.props.profileImage} alt="" className="card__img--profile-image" />
		            <img src={this.props.icon} alt="" className="card__img--icon" />
		          </div>
		          <div className="card__text-wrapper">
		            <div className="card__text-container--top">
		              <h2 className="card__name">{this.props.name}</h2>
		              <div className="card__sub-text-container">
		                <p className="card__job-title">{this.props.job}</p>
		                <p className="card__text--divider">|</p>
		                <p className="card__company-name">{this.props.company}</p>
		              </div>
		            </div>
		            <div className="card__text-container--bottom card__sub-text-container">
		              <p className="card__phone-num--label">Phone Number</p>
		              <p className="card__phone-num">123-456-7890</p>
		              <p className="card__email">email@company.com</p>
		            </div>
		          </div>
		        </div>
			</div>
		);
	}
}