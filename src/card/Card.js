import React from 'react';

export class Card extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();

		this.state = {
			hover: false,
			topTextWrapping: false
		};

		this.handleHover = this.handleHover.bind(this);
	}

	handleHover(){
		this.setState({
			isHovered: !this.state.isHovered
		});
	}

	// componentWillMount() {
	// 	console.log(this.myRef.current.children[1].children[0].children[1].offsetHeight)
	// }

	render(){
		// console.log(this.checkHeight())
		const hoverClass = this.state.isHovered ? "card hovering" : "card";

		let divider;
		let jobTitle;
		let companyName;
		let phoneBlock;
		let email;

		const line = this.props.job.length + this.props.company.length + 3;
		console.log(line)
		console.log('BREAK')

		if (!this.props.job || !this.props.company || line > 31) {
			divider = '';
		} else {
			divider = <p className="card__text--divider">|</p>;
		}

		if (!this.props.job) {
			jobTitle = '';
		} else {
			jobTitle = <p className="card__job-title">{this.props.job}</p>;
		}

		if (!this.props.company) {
			companyName = '';
		} else {
			companyName = <p className="card__company-name">{this.props.company}</p>;
		}

		if (!this.props.phone) {
			phoneBlock = '';
		} else {
			phoneBlock = <div className="card__phone-num-wrapper"><p className="card__phone-num--label">Phone Number</p><p className="card__phone-num">{this.props.phone}</p></div>;
		}

		if (!this.props.email) {
			email = '';
		} else {
			email = <p className="card__email">{this.props.email}</p>;
		}

		console.log(this.props.job.length)



		return (
			<div className="col-sm-6 col-lg-3">
				<div ref={this.myRef} className="card" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
					<div className="card__img-wrapper">
						<img src={this.props.profileImage} alt="" className="card__img--profile-image" />
						<img src={this.props.icon} alt="" className="card__img--icon" />
					</div>
					<div className="card__text-wrapper">
						<div className="card__text-container--top">
							<h2 className="card__name">{this.props.name}</h2>
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
				</div>
			</div>
		);
	}
}