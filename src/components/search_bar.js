import React from 'react';

// this is a FUNCTIONAL component
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
class SearchBar extends React.Component {
	constructor(props) {
		super(props);  // calling the parentMethod as Inheritance 

		this.state = {term: ''};
	}


	render() {
		return(
		 <input onChange={event => this.setState({ term: event.target.value })} />; 
	} // single argumunets don't need the extra parens like: (event)
}


export default SearchBar;