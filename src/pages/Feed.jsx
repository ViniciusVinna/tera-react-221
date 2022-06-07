import React from 'react';

import { Stories } from '../components/Stories';
import { Feed as FeedMenor } from '../components/Feed';

import { RotaPrivada } from './RotaPrivada';

export function Feed() {
	return (
		<RotaPrivada>
			<Stories />

			<FeedMenor />
		</RotaPrivada>
	);
}
