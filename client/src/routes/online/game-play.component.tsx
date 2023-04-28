import { useContext, useEffect } from 'react';

import icons from '../../data';
import { socket } from './room.component';

import { SocketContext } from '../../contexts/socket.context';

import Icon from '../../components/icon/icon.component';
import Button from '../../components/button/button.component';

import { GameResultContainer } from '../../styles/game-result.styles';
import {
	GamePlayContainer,
	PlayerContainer,
	PlayerIdentity,
	SecondPlayer,
} from '../../styles/game-play.styles';

const OnlineGamePlay = (): JSX.Element => {
	const {
		opponent,
		playerChoice,
		playerOneActive,
		setWinnerText,
		score,
		setScore,
		resultOut,
		winnerText,
		didWin,
		setResultOut,
		setDidWin,
		setGamePlay,
	} = useContext(SocketContext);

	const [firstPlayerData] = icons.filter(({ title }) => title === playerChoice);
	const image = firstPlayerData?.image;

	const [secondPlayerData] = icons.filter(({ title }) => title === opponent);
	const oppImage = secondPlayerData?.image;
	const oppTitle = secondPlayerData?.title;
	console.log('result', resultOut);

	useEffect(() => {
		socket.on('result', data => {
			setResultOut(true);

			const { winner } = data;

			if ((winner === 'p1' && playerOneActive) || (winner === 'p2' && !playerOneActive)) {
				setWinnerText(`you win`);
				setScore(score + 1);
				setDidWin(true);
			} else if (winner === 'p1' || winner === 'p2') {
				setWinnerText(`you lose`);
				score > 0 && setScore(score - 1);
			} else {
				setWinnerText(`It's a draw`);
			}
		});

		return () => {
			socket.off('result');
		};
	}, [resultOut]);

	const startNewGame = () => {
		setGamePlay(false);
		setDidWin(false);
		setResultOut(false);
	};

	return (
		<GamePlayContainer>
			<PlayerContainer spaceBetween={resultOut}>
				<Icon key={11} title={playerChoice} image={image} large={true} won={didWin} />

				{!resultOut ? (
					<SecondPlayer large={true}></SecondPlayer>
				) : (
					<Icon key={22} title={oppTitle} image={oppImage} large={true} />
				)}
			</PlayerContainer>

			<PlayerIdentity>
				<p>you picked</p>
				<p>the opponent picked</p>
			</PlayerIdentity>

			{resultOut && (
				<GameResultContainer>
					<p>{winnerText}</p>

					<Button
						type={'button'}
						btnStyle={'primary'}
						children={'play again'}
						handler={startNewGame}
					/>
				</GameResultContainer>
			)}
		</GamePlayContainer>
	);
};

export default OnlineGamePlay;
