import './App.scss';
import GameInfo from './components/gameInfo/GameInfoComponent';
import GameBody from './components/gameBody/GameBodyComponent';

const App = () => {
	return (
		<main className='App'>
			<div className='Game Game__Container'>
				<GameInfo />
				<GameBody />
				<div className='Game__Rules'>{/* <span>rules</span> */}</div>
			</div>
		</main>
	);
};

export default App;
