import { useContext } from 'react';

import GameInfo from './components/gameInfo/GameInfoComponent';
import GameBody from './components/gameBody/GameBodyComponent';
import GameRules, { GameRulesImage } from './components/gameRules/GameRulesComponent';

import { RulesContext } from './contexts/rulesContext';

import './App.scss';

const App = () => {
	const { isClicked } = useContext(RulesContext);

	return (
		<main className='App'>
			{isClicked ? (
				<GameRulesImage />
			) : (
				<div className='Game Game__Container'>
					<GameInfo />
					<GameBody />
					<GameRules />
				</div>
			)}
		</main>
	);
};

export default App;
