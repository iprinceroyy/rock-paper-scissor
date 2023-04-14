import { createContext, useState } from 'react';

export const SocketContext = createContext({
	room: '',
	setRoom: val => {},
	sockets: [],
	setSocket: val => {},
	isPlaying: false,
	setIsPlaying: val => {},
	playerOneActive: false,
	setPlayerOneActive: val => {},
	playerChoice: 'paper',
	setPlayerChoice: val => {},
	gamePlay: false,
	setGamePlay: val => {},
	resultOut: false,
	setResultOut: val => {},
	opponent: '',
	setOpponent: val => {},
	winnerText: '',
	setWinnerText: val => {},
	score: 0,
	setScore: val => {},
	didWin: false,
	setDidWin: val => {},
});

export const SocketProvider = ({ children }) => {
	const [sockets, setSocket] = useState([]);
	const [room, setRoom] = useState('');
	const [isPlaying, setIsPlaying] = useState(false);
	const [playerOneActive, setPlayerOneActive] = useState(false);
	const [playerChoice, setPlayerChoice] = useState('');
	const [gamePlay, setGamePlay] = useState(false);
	const [opponent, setOpponent] = useState('');
	const [winnerText, setWinnerText] = useState('');
	const [score, setScore] = useState(0);

	const [resultOut, setResultOut] = useState(false);
	const [didWin, setDidWin] = useState(false);

	const value = {
		room,
		setRoom,
		sockets,
		setSocket,
		isPlaying,
		setIsPlaying,
		playerOneActive,
		setPlayerOneActive,
		playerChoice,
		setPlayerChoice,
		gamePlay,
		setGamePlay,
		resultOut,
		setResultOut,
		opponent,
		setOpponent,
		winnerText,
		setWinnerText,
		score,
		setScore,
		didWin,
		setDidWin,
	};

	return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
};
