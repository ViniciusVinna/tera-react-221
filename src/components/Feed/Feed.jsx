import { Post } from './Post';

import './Feed.css';

export function Feed() {
	return (
		<div className="container">
      <section className="feed">
				<Post />
      </section>
    </div>
	)
}
