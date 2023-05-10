import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

const Home = lazy(() => import('./routes/home/home.component'));
const Offline = lazy(() => import('./routes/offline/game-start.component'));
const Online = lazy(() => import('./routes/online/room.component'));
const Spinner = lazy(() => import('./components/spinner/spinner.component'));

const App = (): JSX.Element => {
	return (
		<Suspense fallback={<Spinner />}>
			<main className='App'>
				<h1 className='sr-only'>Rock Paper Scissor App</h1>

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
