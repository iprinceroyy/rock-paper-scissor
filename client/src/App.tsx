import { useContext } from 'react';

import { ChoiceContext } from './contexts/choice.context';
import Online from './pages/online/online.component';
import Offline from './pages/offline/offline.component';
import Home from './pages/home/home.component';

import './App.scss';

const App = (): JSX.Element => {
	const { playOnline, playOffline } = useContext(ChoiceContext);

	return (
		<main className='App'>
			{!playOffline && !playOnline && <Home />}
			{playOffline && <Offline />}
			{playOnline && <Online />}
		</main>
	);
};

export default App;
