import './Topbar.css';

import { Logo } from '../Logo';

export function Topbar() {
	return (
		<header className="topbar">
			<div className="container">

				<Logo />

				<button className="topbar__icon">
					<i className="far fa-paper-plane"></i>
				</button>
			</div>
		</header>
	)
}
