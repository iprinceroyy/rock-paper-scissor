import './App.scss';
import GameInfo from './components/gameInfo/GameInfoComponent';
import GameBody from './components/gameBody/GameBodyComponent';
import GameRules from './components/gameRules/GameRulesComponent';

const App = () => {
	return (
		<main className='App'>
			<div className='Game Game__Container'>
				<GameInfo />
				<GameBody />
				<GameRules />
			</div>
		</main>
	);
};

export default App;
