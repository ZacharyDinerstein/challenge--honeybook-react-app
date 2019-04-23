import React from 'react';
import ReactDOM from 'react-dom';

export class Card extends React.Component {
	render(){
		return (
			<div className="col-sm-6  col-lg-3">
		        <div className="card">
		          <div className="card__img-wrapper">
		            <img src="https://s3.amazonaws.com/honeybook_cdn/assets_users_production/users/532b267c46ecaccbf1000143/profile_photos/2014-09-17-22-46-03-442.png" alt="" className="card__img--main" />
		            <img src="https://s3.amazonaws.com/honeybook_cdn/assets_users_production/companies/532b267c46ecaccbf1000144/icons/2014-10-02-18-59-41-959.png" alt="" className="card__img--icon" />
		          </div>
		          <div className="card__text-wrapper">
		            <div className="card__text-container--top">
		              <h2 className="card__name">Full Name</h2>
		              <div className="card__sub-text-container">
		                <p className="card__job-title">Job Title</p>
		                <p className="card__text--divider">|</p>
		                <p className="card__company-name">@CompanyName</p>
		              </div>
		            </div>
		            <div className="card__text-container--bottom card__sub-text-container d-none">
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