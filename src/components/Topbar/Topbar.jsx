import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './Topbar.css';

import { Avatar } from 'antd';

import { Logo } from '../Logo';

export function Topbar({ abreChat = () => {}}) {
	const [estaLogado, setLogado] = useState(false);
	const [usuarioLogado, setUsuario] = useState({});
	const location = useLocation();

	useEffect(() => {
		const usuario = localStorage.getItem('usuario');

		if (usuario) {
			setLogado(true);
			setUsuario(JSON.parse(usuario));
		}
	}, [location.pathname])

	return (
		<header className="topbar">
			<div className="container">

				<Logo />

				{estaLogado && (
					<>
						<button
							className="topbar__icon"
							onClick={() => abreChat(true)}
						>
							<i className="far fa-paper-plane"></i>
						</button>

						<span>{usuarioLogado.name}</span>
						<Avatar src={usuarioLogado.avatar_url} />
					</>
				)}
			</div>
		</header>
	)
}
