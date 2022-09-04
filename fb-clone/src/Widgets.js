import React from 'react';
import "./Widgets.css"

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InstagramIcon from '@mui/icons-material/Instagram';

function Widgets() {
	return (
		<div className="widgets">
			<h4>About Me</h4>
			<div className="widgets__option">
				<h4>My Website</h4>
				<OpenInNewIcon />
			</div>
			<div className="widgets__option">
				<h4>LinkedIn</h4>
				<LinkedInIcon />
			</div>
			<div className="widgets__option">
				<h4>GitHub</h4>
				<GitHubIcon />
			</div>
			<div className="widgets__option">
				<h4>Instagram</h4>
				<InstagramIcon />
			</div>
		{/*	<iframe src="https://www.instagram.com/ericbollar/embed" width="340" height="300" frameborder="0" scrolling="yes" allowtransparency="true"></iframe> */}
		</div>
	)
}

export default Widgets;