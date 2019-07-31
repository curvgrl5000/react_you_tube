import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-DOM';
import YTSEARCH from 'youtube-api-search';
import SearchBar from './components/search_bar';
import API_KEY from '../config.js';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// ES6 syntax of a CLASS BASED component example, was a Functional Component:
class App extends Component {
	constructor(props) {
 		super(props);

 		this.state = { 
 			videos: [],
 			selectedVideo: null 
 		};

 		this.videoSearch('wolff olins oi');
	}

	// 	YTSEARCH({ key: API_KEY, term: 'surfboards'}, function(videos) {
	// 	this.setState({ videos: videos });
	// });

  // Notice above how we're using function(data), that's not the ES6 way
  // See below for the new syntax sugar with the fat arrow
  // Also note that if the keys and the values are the same strings
  // then simply note them with one argument on 'this.setState

  // YTSEARCH was moved out of the component and into a new argument

	videoSearch(term) {
		 YTSEARCH({ key: API_KEY, term: term}, (videos) => {
		 		this.setState({ 
		 			videos: videos,
		 			selectedVideo: videos[0] 
		 		});
		 });
	}

	render() {
		const videoSearch =_.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

// Take this componet's generated HTML and render it in the DOM
ReactDOM.render(<App />, document.querySelector('.container')); 

