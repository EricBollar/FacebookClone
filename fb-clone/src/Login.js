import React from 'react';
import "./Login.css";

import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

	const [state, dispatch] = useStateValue();

	const signIn = () => {
		auth.signInWithPopup(provider)
		.then(result => {
			dispatch({
				type: actionTypes.SET_USER,
				user: result.user,
			})
		}).catch(error => alert(error.message));
	}

	return (
		<div className="login">
			<div className="login__logo">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1280px-2021_Facebook_icon.svg.png" alt="logo" />
				{/*<img src="faceClone.jpg" />*/}
			</div>
			<h4>By Eric Bollar</h4>
			<Button type="submit" onClick={signIn}>Sign in with Google</Button>
		</div>
	)
}

export default Login;
