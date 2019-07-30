import React, { Component } from 'react';

// this is a FUNCTIONAL component example
// const SearchBar = () => {
// 	return <input />;
// };

// this is a CLASS component
// and we use it when it need to do some record keeping
// class SearchBar extends React.Component {
// 	render() {
// 		return <input onChange={this.onInputChange}/>;
// 	}

// 	onInputChange(event) {
// 		console.log(event.target); // the whole enchilada
// 		console.log(event.target.value); // just the input value

// 	}
// }

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
					placeholder="surfing the big waves" 
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

