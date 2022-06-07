import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Footer } from './components/Footer';
import { Topbar } from './components/Topbar';

import { Login, Feed, User } from './pages';

function App() {
  return (
		<React.Fragment>

			<Topbar />

			<Routes>
				<Route path="/" element={<Login />} />

				<Route path="/feed" element={<Feed />} />

				<Route path="/usuario/:id" element={<User />} />
			</Routes>

			<Footer />
		</React.Fragment>
  );
}

export default App;
