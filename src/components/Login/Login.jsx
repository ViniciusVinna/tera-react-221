import { useState } from 'react';
import { Navigate } from "react-router-dom";

import './Login.css';

export function LoginForm() {
	const [carregando, setCarregando] = useState(false);
	const [estaLogado, setEstaLogado] = useState(false);
	const [erro, setErro] = useState(false);

	function manipulaLogin(evento) {
		evento.preventDefault();
		const username = evento.target.elements.username.value;

		if (username) {
			setCarregando(true);

			fetch(`https://api.github.com/users/${username}`)
				.then(response => response.json())
				.then(user => {
					if (user.login) {
						localStorage.setItem('usuario', JSON.stringify(user));
						setEstaLogado(true);

						return;
					}

					setErro(true);
				})
		}
		else {
			alert('Preencha o campo de usuário');
		}
	}

	if (estaLogado && !erro) {
		return <Navigate to="/feed" />
	}

	return (
		<div className="login_page">
			<form className="login__form" onSubmit={manipulaLogin}>
				<h3 className="login__form__title">Entrar com Github</h3>

				<input className="login__input" name="username" type="text" placeholder="Usuário Github" />

				<button
					className={`login__submit ${carregando ? 'login-carregando' : ''}`}
					type="submit"
				>
					{carregando ? 'Aguarde...' : 'Login'}
				</button>

				{erro && <p className="login__erro">Usuário não encontrado</p>}
			</form>
		</div>
	);
}
