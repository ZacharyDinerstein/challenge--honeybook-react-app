import React from 'react';
import ReactDOM from 'react-dom';
import '../searchBar/SearchBar.scss';
import { SearchBar } from '../searchBar/SearchBar.js';


export class Header extends React.Component {
	render(){
		return (
			<div className="container-fluid">
				<header>
					<div className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-5">
							<h1>Contact List</h1>
						</div>
						<div className="col-sm-5">
							<SearchBar handleChange={this.props.handleChange} />
						</div>
					</div>
				</header>
			</div>
		);
	}
}