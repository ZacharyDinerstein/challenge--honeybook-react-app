import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export class SearchBar extends React.Component {
	render(){
		return (
			<div className="search-bar">
				<input type="text" className="input" placeholder="search..." onChange={this.props.handleChange} />
				<FontAwesomeIcon icon={faSearch} />
			</div>
		);
	}
}