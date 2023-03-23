import { useContext } from 'react';

import iconRock from '../../assets/images/icon-rock.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';
import bgTriangle from '../../assets/images/bg-triangle.svg';

import { RulesContext } from '../../contexts/rulesContext';
import { GameContext } from '../../contexts/gameContext';

import { GameBodyContainer, Icon, ThirdIcon, IconWrapper } from './GameBodyStyles';
import { GamePlayContainer } from '../gamePlay/gamePlayStyles';

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
	const { isBtnClicked, setIsBtnClicked, btnVal, setBtnVal } = useContext(GameContext);

	const iconClickHandler = (e: any) => {
		setIsBtnClicked(!isBtnClicked);
		setBtnVal(e.target.closest('#icon-wrapper').value);
	};

	const [{ image = '' }] = icons.filter(({ title }) => title === btnVal);

	return isBtnClicked ? (
		<GamePlayContainer>
			<Icon title={btnVal} key='1'>
				<IconWrapper type='button' id='icon-wrapper' value={btnVal} onClick={iconClickHandler}>
					<img src={image} alt={btnVal} />
				</IconWrapper>
			</Icon>
			<Icon title={''} key='1'>
				<IconWrapper type='button' id='icon-wrapper' value={btnVal} onClick={iconClickHandler}>
					{/* <img src={image} alt={btnVal} /> */}
				</IconWrapper>
			</Icon>
		</GamePlayContainer>
	) : (
		<GameBodyContainer imageUrl={bgTriangle}>
			{icons.map(({ id, title, image }) =>
				id === 3 ? (
					<ThirdIcon title={title} key={id}>
						<IconWrapper type='button' id='icon-wrapper' value={title} onClick={iconClickHandler}>
							<img src={image} alt={title} />
						</IconWrapper>
					</ThirdIcon>
				) : (
					<Icon title={title} key={id}>
						<IconWrapper type='button' id='icon-wrapper' value={title} onClick={iconClickHandler}>
							<img src={image} alt={title} />
						</IconWrapper>
					</Icon>
				)
			)}
		</GameBodyContainer>
	);
};

export default GameBody;
