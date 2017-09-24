import React from 'react';
import ReactDOM from 'react-DOM';
import YTSEARCH from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBqRzYXTULlNthnv52K5XO193Md1XYuZI8';

YTSEARCH({ key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data)
});

// create a new component. This component should produce some HTML
// some HTML...

// this is a FUNCTIONAL component example

// const App = function() {
//	return <div>Hi!</div>;
//}

// ES6 syntax of a FUNCTIONAL component example:
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}


// Take this componet's generated HTML and render it in the DOM
ReactDOM.render(<App />, document.querySelector('.container')); 