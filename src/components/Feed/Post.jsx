import { useState } from 'react';

import './Post.css';

export function Post({
	id,
	avatar = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
	nome,
	username,
	foto = 'https://archive.org/download/placeholder-image/placeholder-image.jpg'
}) {
	const [deuLike, alteraLike] = useState(false);

	return (
		<article className="post">
			<header className="post__header">
				<div className="user">
					<a href={`/usuario/${id}`} className="user__thumb">
						<img src={avatar} alt=""/>
					</a>

					<a href={`/usuario/${id}`} className="user__name">{nome}</a>
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
					curtido por <a href={`/usuario/${id}`}>Domino</a> e outras <a href={`/usuario/${id}`}>7 pessoas</a>
				</span>
				</div>
			</div>
		</article>
	)
}
