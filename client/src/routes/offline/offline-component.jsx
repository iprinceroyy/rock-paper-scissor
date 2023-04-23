import GameStart from '../../components/game-start/game-start.component';
import { Routes, Route } from 'react-router-dom';
import { GameRulesImage } from '../../components/game-rules/game-rules.component';

const Offline = () => {
	return (
		<Routes>
			<Route index element={<GameStart />}></Route>
			<Route path='rule' element={<GameRulesImage />}></Route>
		</Routes>
	);
};

export default Offline;
