import React, { Component } from 'react';

// Here's the ES6 version
class SearchBar extends Component {
	constructor(props) {
		super(props);  // calling the parentMethod as Inheritance 

		this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					placeholder="the static logo is dead" 
					onChange={event => this.onInputChange(event.target.value)} />
				<h2 className="search">SEARCH</h2> 
			</div>
		);
	}

	onInputChange(term) {
	 	this.setState({term});
	 	this.props.onSearchTermChange(term);
	}
}


export default SearchBar;

