import { MouseEventHandler, useState, useContext, useEffect } from 'react';

import icons from '../../data';

import {
	GamePlayContainer,
	PlayerContainer,
	PlayerIdentity,
	SecondPlayer,
} from '../../styles/game-play.styles';
import Icon from '../../components/icon/icon.component';
import Button from '../../components/button/button.component';
import { SocketContext } from '../../contexts/socket.context';
import { GameResultContainer } from '../../styles/game-result.styles';

type OnlineGamePlayProps = {
	handler: MouseEventHandler<HTMLButtonElement>;
};

const OnlineGamePlay = ({ handler }: OnlineGamePlayProps): JSX.Element => {
	const { opponent, playerChoice, resultOut, winnerText, didWin } = useContext(SocketContext);

	const [firstPlayerData] = icons.filter(({ title }) => title === playerChoice);
	const image = firstPlayerData?.image;

	const [secondPlayerData] = icons.filter(({ title }) => title === opponent);
	const oppImage = secondPlayerData?.image;
	const oppTitle = secondPlayerData?.title;

	return (
		<>
			<GamePlayContainer>
				<PlayerContainer spaceBetween={!resultOut}>
					<Icon key={11} title={playerChoice} image={image} large={true} won={didWin} />

					{resultOut ? (
						<SecondPlayer large={true}></SecondPlayer>
					) : (
						<Icon key={22} title={oppTitle} image={oppImage} large={true} />
					)}
				</PlayerContainer>

				<PlayerIdentity>
					<p>you picked</p>
					<p>the opponent picked</p>
				</PlayerIdentity>

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
			</GamePlayContainer>
		</>
	);
};

export default OnlineGamePlay;
