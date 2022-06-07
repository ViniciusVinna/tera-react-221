import { useState } from 'react';

import { Link } from 'react-router-dom';

import './Post.css';

export function Post({
	avatar = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
	foto = 'https://archive.org/download/placeholder-image/placeholder-image.jpg',
	id,
	nome,
	username,
}) {
	const [deuLike, alteraLike] = useState(false);

	return (
		<article className="post">
			<header className="post__header">
				<div className="user">
					<Link to={`/usuario/${id}`} className="user__thumb">
						<img src={avatar} alt=""/>
					</Link>

					<Link to={`/usuario/${id}`} className="user__name">{nome}</Link>
				</div>

				<button className="post__context">
					<i className="fas fa-ellipsis-h"></i>
				</button>
			</header>

			<figure className="post__figure">
				<img src={foto} alt=""/>
			</figure>

			<nav className="post__controls">
				<button
					className="post__control"
					onClick={() => alteraLike(!deuLike)}
				>
					{deuLike ? <i className="fa fa-heart" /> : <i className="far fa-heart" /> }
				</button>

				<button className="post__control">
					<i className="far fa-comment"></i>
				</button>

				<button className="post__control">
					<i className="far fa-bookmark"></i>
				</button>
			</nav>

			<div className="post__status">
				<div className="user">
					<span>
					curtido por <Link to={`/usuario/${id}`}>Domino</Link> e outras <Link to={`/usuario/${id}`}>7 pessoas</Link>
				</span>
				</div>
			</div>
		</article>
	)
}
