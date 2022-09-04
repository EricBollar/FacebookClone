import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

function Sidebar() {
	return (
		<div className="sidebar">
			{/* <SidebarRow src={user.photoURL} title={user.displayName} /> */}
			<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
			<SidebarRow Icon={PeopleIcon} title="Friends"/>
			<SidebarRow Icon={ChatIcon} title="Messenger"/>
			<SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
		</div>
	)
}

export default Sidebar
