import { useState, useContext } from 'react';

import GameStart from './components/game-start/game-start.component';

import './App.scss';
import { ChoiceContext } from './contexts/choice.context';
import Online from './components/online/online.component';

const App = () => {
	const { playOnline, setPlayOnline, playOffline, setPlayOffline } = useContext(ChoiceContext);

	const onlinePlayHandler = () => {
		setPlayOnline(true);
		setPlayOffline(false);
	};

	const offlinePlayHandler = () => {
		setPlayOffline(true);
		setPlayOnline(false);
	};

	return (
		<main className='App'>
			{!playOnline && playOffline ? (
				<GameStart />
			) : (
				<div className='choice'>
					<button type='button' onClick={onlinePlayHandler}>
						Play Online
					</button>
					<button type='button' onClick={offlinePlayHandler}>
						Play with computer
					</button>
				</div>
			)}
			{playOnline && <Online />}
		</main>
	);
};

export default App;
