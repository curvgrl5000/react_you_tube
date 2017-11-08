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
// we can simply pass it as a single parameter
// and return the element; which means...
// const VideoListItem = (props) => {  <<< this... 
// 	const video = props.video; <<< and this...
// 	return <li>Video</li>
// }:
// ... can replace props, with this parameter: ({video}) => {...}
// ... see below:

const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
  console.log(video);
	
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
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

