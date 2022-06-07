import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { Spin } from 'antd';

import { Post } from '../components/Feed';

export function User() {
	const [usuario, setUsuario] = useState({});
	const [carregando, setCarregando] = useState(true);

	const location = useLocation();
	const userID = location.pathname.split('/').at(-1);

	useEffect(() => {
		fetch(`https://624c9312c172b69d69274ae4.mockapi.io/api/v1/users/${userID}`)
			.then((response) => response.json())
			.then((data) => {
				setUsuario(data);
				setCarregando(false);
			})
	}, [])

	console.log({ usuario })

	if (carregando) {
		return <Spin />
	}

	return (
		<Post
			id={usuario.id}
			avatar={usuario.avatar}
			nome={usuario.name}
			foto={usuario?.photos[0]?.picture}
		/>
	)
}
