import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { useStateValue } from './StateProvider';

function Sidebar() {

	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="sidebar">
			<SidebarRow src={user.photoURL} title={user.displayName} />
			<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
			<SidebarRow Icon={PeopleIcon} title="Friends"/>
			<SidebarRow Icon={ChatIcon} title="Messenger"/>
			<SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
			<p><i>*These sidebar buttons and the header buttons are display only. The posts, comments, and likes are all functioning with Firebase.</i></p>
		</div>
	)
}

export default Sidebar
