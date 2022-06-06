import React from 'react';

import { Topbar } from './components/Topbar';
import { Footer } from './components/Footer';
import { Stories } from './components/Stories';
import { Feed } from './components/Feed';
import { Chat } from './components/Chat';

function App() {
	// Estado APP
	const [chatAberto, alteraChatAberto] = React.useState(false);

  return (
		<React.Fragment>

		<Topbar abreChat={alteraChatAberto} />

		<Stories />

		<Feed />

		<Chat aberto={chatAberto} fechaChat={alteraChatAberto} />

		<Footer />
		</React.Fragment>
  );
}

export default App;
