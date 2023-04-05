import { useContext } from 'react';

import { ChoiceContext } from '../../contexts/choice.context';
import Button from '../../components/button/button.component';

import './home.styles.scss';

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
			<Button
				type='button'
				btnStyle='play online'
				children='play online'
				handler={onlinePlayHandler}
			/>
			<Button
				type='button'
				btnStyle='play with computer'
				children='play with computer'
				handler={offlinePlayHandler}
			/>
		</div>
	);
};

export default Home;
