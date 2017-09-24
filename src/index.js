import React, { Component } from 'react';
import ReactDOM from 'react-DOM';
import YTSEARCH from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBqRzYXTULlNthnv52K5XO193Md1XYuZI8';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// ES6 syntax of a FUNCTIONAL component example:
class  App extends Component {
	constructor(props) {
 		super(props)

 		this.state = { videos: [] };
 
 		// 	YTSEARCH({ key: API_KEY, term: 'surfboards'}, function(videos) {
		// 	this.setState({ videos: videos });
		// });

	  // Notice above how we're using function(data), that's not the ES6 way
	  // See below for the new syntax sugar with the fat arrow
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
				<VideoDetail video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// Take this componet's generated HTML and render it in the DOM
ReactDOM.render(<App />, document.querySelector('.container')); 