import { useContext } from 'react';

import { ChoiceContext } from '../../contexts/choice.context';

const Home = () => {
	const { setPlayOffline, setPlayOnline } = useContext(ChoiceContext);

	const onlinePlayHandler = () => {
		setPlayOnline(true);
		setPlayOffline(false);
	};

	const offlinePlayHandler = () => {
		setPlayOffline(true);
		setPlayOnline(false);
	};

	return (
		<div className='choice'>
			<button type='button' onClick={onlinePlayHandler}>
				Play Online
			</button>
			<button type='button' onClick={offlinePlayHandler}>
				Play with computer
			</button>{' '}
		</div>
	);
};

export default Home;
