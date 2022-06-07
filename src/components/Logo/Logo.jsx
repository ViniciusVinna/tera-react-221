import instagramLogo from './img/instagram-logo.svg';

import { Link } from 'react-router-dom'

import './Logo.css';

export function Logo() {
	return (
		<Link to="/feed" className="logo">
			<img src={instagramLogo} alt="Instagram logo"/>
		</Link>
	)
}
