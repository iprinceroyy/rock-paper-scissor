import { FC, MouseEventHandler, useState, useContext, useEffect } from 'react';

import icons from '../../data';

import {
	GamePlayContainer,
	PlayerContainer,
	SecondPlayer,
} from '../../components/game-play/game-play.styles';
import Icon from '../../components/icon/icon.component';
import Button from '../../components/button/button.component';
import { SocketContext } from '../../contexts/socket.context';
import { GameResultContainer } from '../../components/game-result/game-result.styles';

type OnlineGamePlayProp = {
	handler: MouseEventHandler<HTMLButtonElement>;
};

const OnlineGamePlay: FC<OnlineGamePlayProp> = ({ handler }) => {
	const { opponent, playerChoice, resultOut, winnerText } = useContext(SocketContext);

	const [firstPlayerData] = icons.filter(({ title }) => title === playerChoice);
	const image = firstPlayerData?.image;

	const [secondPlayerData] = icons.filter(({ title }) => title === opponent);
	const oppImage = secondPlayerData?.image;
	const oppTitle = secondPlayerData?.title;

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
			<>
				{!resultOut && (
					<GameResultContainer>
						<p>{winnerText}</p>

						<Button
							type={'button'}
							btnStyle={'primary'}
							children={'play again'}
							handler={handler}
						/>
					</GameResultContainer>
				)}
			</>
		</>
	);
};

export default OnlineGamePlay;
