import { Navigate } from 'react-router-dom';

export function RotaPrivada({ children }) {
	console.log('você está na rota privada');

	const usuario = localStorage.getItem('usuario');

	if (!usuario) {
		return <Navigate to="/" />
	}

	return (
		<>
			{children}
		</>
	)
}
