import { FC, MouseEventHandler, useContext } from 'react';

import icons from '../../data';

import {
	GamePlayContainer,
	PlayerContainer,
	SecondPlayer,
} from '../../components/game-play/game-play.styles';
import Icon from '../../components/icon/icon.component';
import Button from '../../components/button/button.component';
import { GameResult } from '../../components/game-play/game-play.styles';
import { SocketContext } from '../../contexts/socket.context';

type OnlineGamePlayProp = {
	handler: MouseEventHandler<HTMLButtonElement>;
};

const OnlineGamePlay: FC<OnlineGamePlayProp> = ({ handler }) => {
	const { opponent, playerChoice, resultOut, winnerText } = useContext(SocketContext);
	const [{ image }] = icons.filter(({ title }) => title === playerChoice);

	const [{ image: oppImage, title: oppTitle }] = icons.filter(({ title }) => title === opponent);

	console.log('result out', resultOut);
	return (
		<>
			<GamePlayContainer>
				<PlayerContainer>
					<Icon key={1} title={playerChoice} image={image} />
					<p>You picked</p>
				</PlayerContainer>

				<PlayerContainer>
					{resultOut ? (
						<SecondPlayer></SecondPlayer>
					) : (
						<Icon key={2} title={oppTitle} image={oppImage} />
					)}
				</PlayerContainer>
			</GamePlayContainer>
			<GameResult>
				<p>{!resultOut && winnerText}</p>
				{!resultOut && (
					<Button type={'button'} btnStyle={'primary'} children={'play again'} handler={handler} />
				)}
			</GameResult>
		</>
	);
};

export default OnlineGamePlay;
