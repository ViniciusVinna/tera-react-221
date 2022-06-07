import React from 'react';

import { Stories } from '../components/Stories';
import { Feed as FeedMenor } from '../components/Feed';

export function Feed() {
	return (
		<>
			<Stories />

			<FeedMenor />
		</>
	);
}
