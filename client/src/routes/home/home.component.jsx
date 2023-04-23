import { Outlet, Link } from 'react-router-dom';
import Button from '../../components/button/button.component';
import './home.styles.scss';

const Home = () => {
	return (
		<div className='choice'>
			<Link to='/online'>
				<Button type='button' btnStyle='play online' children='play online' />
			</Link>

			<Link to='/offline'>
				<Button type='button' btnStyle='play with computer' children='play with computer' />
			</Link>

			<Outlet />
		</div>
	);
};

export default Home;
