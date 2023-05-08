import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import Home from './routes/home/home.component';
import Offline from './routes/offline/game-start.component';
import Online from './routes/online/room.component';
import Spinner from './components/spinner/spinner.component';

import './App.scss';

const App = (): JSX.Element => {
	return (
		<Suspense fallback={<Spinner />}>
			<main className='App'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='online' element={<Online />}></Route>
					<Route path='offline' element={<Offline />}></Route>
				</Routes>
			</main>
		</Suspense>
	);
};

export default App;
