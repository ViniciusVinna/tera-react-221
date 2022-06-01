import React from 'react';

import { Topbar } from './components/Topbar';
import { Footer } from './components/Footer';
import { Stories } from './components/Stories';
import { Feed } from './components/Feed';

function App() {
  return (
		<React.Fragment>

		<Topbar />

		<Stories />

		<Feed />

		<Footer />
		</React.Fragment>
  );
}

export default App;
