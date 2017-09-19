import React from 'react';
import ReactDOM from 'react-DOM';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBqRzYXTULlNthnv52K5XO193Md1XYuZI8';

// create a new component. This component should produce some HTML
// some HTML

// const App = function() {
//	return <div>Hi!</div>;
//}

// ES6 syntax:
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}


// Take this componet's generated HTML and render it in the DOM
ReactDOM.render(<App />, document.querySelector('.container')); 