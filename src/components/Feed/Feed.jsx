import { useState, useEffect } from 'react';
import { Spin } from 'antd';

import { Post } from './Post';

import './Feed.css';

export function Feed() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://624c9312c172b69d69274ae4.mockapi.io/api/v1/users')
			.then(response => response.json())
			.then(data => {
				setPosts(data);
				setLoading(false);
			})
	}, []);

	return (
		<div className="container">
      <section className="feed">
				{loading
					? <Spin />
					: posts.map(post => (
						<Post
							key={post.id}
							id={post.id}
							avatar={post.avatar}
							nome={post.name}
							username={post.username}
							foto={post?.photos[0]?.picture}
						/>)
					)
}
      </section>
    </div>
	)
}
