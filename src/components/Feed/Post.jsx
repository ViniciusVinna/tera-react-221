import bruceImg from './img/bruce-profile.jpg';
import brucePostImg from './img/bruce-3.jpg';

import './Post.css';

export function Post() {
	return (
		<article className="post">
			<header className="post__header">
				<div className="user">
					<a href="/#" className="user__thumb">
						<img src={bruceImg} alt=""/>
					</a>

					<a href="/#" className="user__name">Bruce Wayne</a>
				</div>

				<button className="post__context">
					<i className="fas fa-ellipsis-h"></i>
				</button>
			</header>

			<figure className="post__figure">
				<img src={brucePostImg} alt=""/>
			</figure>

			<nav className="post__controls">
				<button className="post__control">
					<i className="far fa-heart"></i>
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
					curtido por <a href="/#">Domino</a> e outras <a href="/#">7 pessoas</a>
				</span>
				</div>
			</div>
		</article>
	)
}
