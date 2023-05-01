import { Outlet } from 'react-router-dom';

import Button from '../../components/button/button.component';

import { ChoiceContainer, PlayOnlineLink, PlayOfflineLink } from './home.styles';

const Home = (): JSX.Element => {
	return (
		<ChoiceContainer>
			<PlayOnlineLink to='/online'>
				<Button type='button' btnStyle='play online' children='play online' />
			</PlayOnlineLink>

			<PlayOfflineLink to='/offline'>
				<Button type='button' btnStyle='play with computer' children='play with computer' />
			</PlayOfflineLink>

			<Outlet />
		</ChoiceContainer>
	);
};

export default Home;
