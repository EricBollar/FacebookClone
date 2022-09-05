import React from 'react';
import "./Comment.css";

import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import db from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useStateValue } from './StateProvider';

function Comment({postID, profilePic, username, message, likedby, commentID}) {
	
	const [{ user }, dispatch] = useStateValue();

	function clickLike() {
		const i = likedby.indexOf(user.uid);
		const post = db.collection('posts').doc(postID);
		if (i < 0) {
			post.collection('comments').doc(commentID).update({likedby: [...likedby, user.uid]});
		} else {
			post.collection('comments').doc(commentID).update({likedby: likedby.splice(i, i)});
		}
	}

	return (
		<div className="comment">
			<div className="comment__info">
				<Avatar src={profilePic} className="comment__avatar" sx={{width: 25, height: 25}}/>
				<h3>{username}: </h3> &nbsp;
			</div>
			<p>{message}</p>
		{/*	<div className={"comment__option" + ( likedby.includes(user.uid) ? " comment__option--active" : "")} onClick={clickLike}>
				<p>{likedby.length}</p> &nbsp;
				<ThumbUpIcon sx={{width: 20, height: 20}}/>
			</div> */}
		</div>
	)
}

export default Comment;
