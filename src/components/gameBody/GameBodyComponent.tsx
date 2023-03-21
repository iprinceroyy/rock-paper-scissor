import iconRock from '../../assets/images/icon-rock.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';
import bgTriangle from '../../assets/images/bg-triangle.svg';

import { GameBodyContainer, Icon, ThirdIcon, IconWrapper } from './GameBodyStyles';

const icons = [
	{
		id: 1,
		title: 'paper',
		image: iconPaper,
	},
	{
		id: 2,
		title: 'scissors',
		image: iconScissors,
	},
	{
		id: 3,
		title: 'rock',
		image: iconRock,
	},
];

const GameBody = () => {
	return (
		<GameBodyContainer imageUrl={bgTriangle}>
			{icons.map(({ id, title, image }) =>
				id === 3 ? (
					<ThirdIcon title={title} key={id}>
						<IconWrapper>
							<img src={image} alt='' />
						</IconWrapper>
					</ThirdIcon>
				) : (
					<Icon title={title} key={id}>
						<IconWrapper>
							<img src={image} alt='' />
						</IconWrapper>
					</Icon>
				)
			)}
		</GameBodyContainer>
	);
};

export default GameBody;
