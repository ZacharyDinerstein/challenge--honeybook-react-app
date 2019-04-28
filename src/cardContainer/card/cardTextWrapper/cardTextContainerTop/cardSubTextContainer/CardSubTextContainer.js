import React from 'react';
import CardJobTitle from './cardJobTitle/CardJobTitle.js';
import CardCompanyName from './cardCompanyName/CardCompanyName.js';
import Divider from './divider/Divider.js';

export class CardSubTextContainer extends React.Component {

	constructor(props) {
		super(props);
		this.myRef = React.createRef();

		this.state = {
			textContainerIsMultiLine: false 
		};
	}

	componentDidMount() {
		const textContainerheight = this.myRef.current.offsetHeight;

		if (textContainerheight > 24){
			this.setState({
				textContainerIsMultiLine: true
			});
		}
	}


	render(){
		return (
			<div className="card__sub-text-container" ref={this.myRef}>
				<CardJobTitle job={this.props.job} />
				<Divider job={this.props.job} company={this.props.company} textContainerIsMultiLine={this.state.textContainerIsMultiLine} />
				<CardCompanyName company={this.props.company} />
			</div>
		);
	}
}

export default CardSubTextContainer;