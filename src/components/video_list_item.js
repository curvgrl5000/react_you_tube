import React from 'react';

// const VideoListItem = (function(props) {
// 	return <li>Video</li>
// };

// ES5:
// const VideoListItem = (function(props) {
// 	const video = props.video;
// return <li>Video</li>
// };

//

// ES6: Since we know there's a video property
// then we can simply pass it as a single argument
// and return the element
const VideoListItem = ({video}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
  //console.log(video);
	
	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;