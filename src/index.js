import React, { Component } from 'react';
import ReactDOM from 'react-DOM';
import YTSEARCH from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBqRzYXTULlNthnv52K5XO193Md1XYuZI8';


// ES6 syntax of a FUNCTIONAL component example:
class  App extends Component {
	constructor(props) {
 		super(props)

 		this.state = { videos: [] };
 
 		// 	YTSEARCH({ key: API_KEY, term: 'surfboards'}, function(videos) {
		// 	this.setState({ videos: videos });
		// });

  // Notice above how we're using function(data), that's not the ES6 way
  // See below for the new syntax sugar
  // Also note that if the keys and the values are the same strings
  // then simply note them with one argument on 'this.setState'

   		YTSEARCH({ key: API_KEY, term: 'surfboards'}, videos => {
		 		this.setState({ videos });
		 });
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

// Take this componet's generated HTML and render it in the DOM
ReactDOM.render(<App />, document.querySelector('.container')); 