import React from 'react';

import './Topbar.css';

import { Logo } from '../Logo';

export function Topbar({ abreChat = () => {}}) {
	return (
		<header className="topbar">
			<div className="container">

				<Logo />

				<button
					className="topbar__icon"
					onClick={() => abreChat(true)}
				>
					<i className="far fa-paper-plane"></i>
				</button>
			</div>
		</header>
	)
}
