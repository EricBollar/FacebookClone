import React, { useState, useEffect } from 'react';
import "./Post.css";
import Comment from "./Comment";

import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';

import db from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider';

function Post({profilePic, image, username, timestamp, message, postID, likedby}) {
	
	const [{ user }, dispatch] = useStateValue();
	const [comments, setComments] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		db.collection('posts').doc(postID).collection('comments').onSnapshot((snapshot) =>
			setComments(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
		);
	})

	function clickLike() {
		const i = likedby.indexOf(user.uid);
		if (i < 0) {
			db.collection('posts').doc(postID).update({likedby: [...likedby, user.uid]});
		} else {
			db.collection('posts').doc(postID).update({likedby: likedby.splice(i, i)});
		}
	}

	const createComment = e => {
		e.preventDefault(); // No Page Refresh

		db.collection('posts').doc(postID).collection('comments').add({
			message: input,
			profilePic: user.photoURL,
			username: user.displayName,
			likedby: []
		});

		setInput("");
	}

	return (
		<div className="post">
			<div className="post__top">
				<Avatar src={profilePic} className="post__avatar" />
				<div className="post__topInfo">
					<h3>{username}</h3>
					<p>{new Date(timestamp?.toDate()).toUTCString()}</p>
				</div>
			</div>
			<div className="post__bottom">
				<p>{message}</p>
			</div>
			<div className="post__image">
				<img src={image} alt="" />
			</div>
			<div className={"post__options"}>
				<form>
					<input value={input} onChange={(e) => setInput(e.target.value)} className="post__input" placeholder={`Add a comment, ${user.displayName}!`} type="text"/>
					<button onClick={createComment} type="submit">Hidden Submit</button>
				</form>
				<div className={"post__option" + ( likedby.includes(user.uid) ? " post__option--active" : "")} onClick={clickLike}>
					<ThumbUpIcon/>
					<p>{likedby.length} Likes</p>
				</div>
	
			</div>
			{comments.map(comment => (
				<Comment
					key={comment.data.id}
					commentID={comment.id}
					profilePic={comment.data.profilePic}
					message={comment.data.message}
					username={comment.data.username}
					likedby={comment.data.likedby}
					postID={postID}
				/>
			))}	
		</div>
	)
}

export default Post;
