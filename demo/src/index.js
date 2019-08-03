import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-DOM';
import YTSEARCH from 'youtube-api-search';
import SearchBar from '../../src/components/search_bar';
import Footer from '../../src/components/footer';
import API_KEY from '../../config.js';
import VideoList from '../../src/components/video_list';
import VideoDetail from '../../src/components/video_detail';


class App extends Component {
	constructor(props) {
 		super(props);

 		this.state = { 
 			videos: [],
 			selectedVideo: null 
 		};

 		this.videoSearch('wolff olins oi');
	}

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
				<Footer />
			</div>
		);
	}
}

// Take this componet's generated HTML and render it in the DOM
ReactDOM.render(<App />, document.querySelector('.container')); 

