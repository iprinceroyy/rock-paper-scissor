import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Offline from './routes/offline/offline-component';
import Online from './routes/online/online.component';

import './App.scss';

const App = (): JSX.Element => {
	return (
		<main className='App'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='online' element={<Online />}></Route>
				<Route path='offline/*' element={<Offline />}></Route>
			</Routes>
		</main>
	);
};

export default App;
