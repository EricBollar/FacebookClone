import React from 'react';
import "./Login.css";
import logo from './faceClone.jpg';

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
				<img src={logo} />
			</div>
			<h3>By Eric Bollar</h3>
			<Button className="login__button" type="submit" onClick={signIn}>
				<img src="https://img.cppng.com/download/2020-06/66274-school-google-pearl-button-up-sign-middle.png" alt="google logo" />
				Sign in with Google
			</Button>
		</div>
	)
}

export default Login;
