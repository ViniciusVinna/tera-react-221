import './Stories.css';

import { Story } from './Story';

export function Stories() {
	return (
		<div className="container">
      <section className="stories">
        <div className="stories__container">
					<Story />
        </div>
      </section>
    </div>
	)
}
