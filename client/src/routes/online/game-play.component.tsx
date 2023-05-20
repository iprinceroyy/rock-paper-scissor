import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import icons from '../../data';
import { socket } from './room.component';

import Icon from '../../components/icon/icon.component';
import Button from '../../components/button/button.component';

import {
	increment,
	decrement,
	setResultOut,
	setWinnerText,
	setDidWin,
} from '../../redux/score/online-score.slice';
import { setGamePlay } from '../../redux/players/online-players.slice';
import {
	setOpponentPickedMessage,
	setOpponentRestartedMessage,
} from '../../redux/status/opponent-status.slice';

import { GameResultContainer } from '../../styles/game-result.styles';

import {
	GamePlayContainer,
	PlayerContainer,
	PlayerIdentity,
	SecondPlayer,
} from '../../styles/game-play.styles';

const OnlineGamePlay = (): JSX.Element => {
	const { playerOneActive, playerChoice, opponent } = useAppSelector(state => state.onlinePlayers);
	const { resultOut, winnerText, didWin } = useAppSelector(state => state.onlineScorer);

	const dispatch = useAppDispatch();

	const [firstPlayerData] = icons.filter(({ title }) => title === playerChoice);
	const image = firstPlayerData?.image;

	const [secondPlayerData] = icons.filter(({ title }) => title === opponent);
	const opponentImage = secondPlayerData?.image;

	useEffect(() => {
		socket.on('result', data => {
			dispatch(setResultOut(true));

			const { winner } = data;

			if ((winner === 'player1' && playerOneActive) || (winner === 'player2' && !playerOneActive)) {
				dispatch(setWinnerText(`you win`));
				dispatch(increment());
				dispatch(setDidWin(true));
			} else if (winner === 'player1' || winner === 'player2') {
				dispatch(setWinnerText(`you lose`));
				dispatch(decrement());
			} else {
				dispatch(setWinnerText(`draw`));
			}
		});

		dispatch(setOpponentRestartedMessage(''));

		socket.on('restart-message', message => {
			dispatch(setOpponentRestartedMessage(message));
		});

		return () => {
			socket.off('result');
			socket.off('restart-message');
		};
	}, [resultOut]);

	const startNewGame = () => {
		dispatch(setGamePlay(false));
		dispatch(setDidWin(false));
		dispatch(setResultOut(false));
		socket.emit('restart');
		dispatch(setOpponentPickedMessage(''));
	};

	return (
		<GamePlayContainer>
			<PlayerContainer spaceBetween={resultOut}>
				<Icon key={11} title={playerChoice} image={image} won={didWin} customSize={true} />

				{!resultOut ? (
					<SecondPlayer className='empty' large={true}></SecondPlayer>
				) : (
					<Icon key={22} title={opponent} image={opponentImage} customSize={true} />
				)}
			</PlayerContainer>

			<PlayerIdentity>
				<p>you picked</p>
				<p>an opposer picked</p>
			</PlayerIdentity>

			{resultOut && (
				<GameResultContainer>
					<p>{winnerText}</p>

					<Button
						type={'button'}
						btnStyle={'play again'}
						children={'play again'}
						handler={startNewGame}
					/>
				</GameResultContainer>
			)}
		</GamePlayContainer>
	);
};

export default OnlineGamePlay;
