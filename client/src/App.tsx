import { useState, useContext } from 'react';

import GameStart from './components/gameStart/GameStartComponent';

import './App.scss';
import { ChoiceContext } from './contexts/choiceContext';
import Online from './components/online/onlineComponent';

const App = () => {
	const { playOnline, setPlayOnline, playOffline, setPlayOffline } = useContext(ChoiceContext);

	const onlinePlayHandler = () => {
		setPlayOnline(true);
	};

	const offlinePlayHandler = () => setPlayOffline(true);

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
