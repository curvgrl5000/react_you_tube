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
			// controlled components
			<div>
				<input
				value={this.state.term} 
				onChange={event => this.setState({ term: event.target.value })} /> 
			</div>
		);
	} // single argumunets don't need the extra parens like: (event)
}


export default SearchBar;

