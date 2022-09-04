import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
	return (
		<div className='feed'>
			<StoryReel />
			<MessageSender />
			<Post
				profilePic='https://wallpaperaccess.com/full/2213426.jpg'
				message='here is a message!'
				timestamp='Timestamp Here'
				username='user912321'
				image='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'
			/>
		</div>
	)
}

export default Feed;
