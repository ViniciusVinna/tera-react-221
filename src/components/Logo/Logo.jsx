import instagramLogo from './img/instagram-logo.svg';

import './Logo.css';

export function Logo() {
	return (
		<a href="/#" className="logo">
			<img src={instagramLogo} alt="Instagram logo"/>
		</a>
	)
}
