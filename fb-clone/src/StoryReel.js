import React from 'react';
import "./StoryReel.css";
import Story from "./Story.js";

function StoryReel() {
	return (
		<div className='storyReel'>
			<Story image="https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg" profileSrc="https://www.postplanner.com/hs-fs/hub/513577/file-2886416984-png/blog-files/facebook-profile-pic-vs-cover-photo-sq.png?width=250&height=250&name=facebook-profile-pic-vs-cover-photo-sq.png" title="Mike Tom" />
			<Story image="https://media.istockphoto.com/photos/motocross-rider-performing-high-jump-at-sunset-picture-id537445040?k=20&m=537445040&s=612x612&w=0&h=PS02GNaZfCxy9E2rey43wH8jkZWaxCZ_4vbnn4F2kbg=" profileSrc="https://sidomexentertainment.com/wp-content/uploads/2021/02/Funny-head.jpg" title="Hank Rides" />
			<Story image="https://cdn.shopify.com/s/files/1/0362/1653/articles/Birthday_Cake_Square_5_1600x.jpg?v=1566642810" profileSrc="https://img.freepik.com/free-vector/cheese-burger-cartoon-icon-illustration_138676-2450.jpg?w=2000" title="Fun Foods" />
		</div>
	)
}

export default StoryReel;
