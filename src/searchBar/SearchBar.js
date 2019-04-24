import React from 'react';
import ReactDOM from 'react-dom';

export class SearchBar extends React.Component {
	render(){
		return (
			<div className="search-bar">
				<input type="text" className="input" placeholder="search..." onChange={this.props.handleChange} />
			</div>
		);
	}
}