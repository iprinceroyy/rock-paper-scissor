import { createContext, useState } from 'react';

export const GameContext = createContext({
	firstPlayerChose: false,
	setFirstPlayerChose: val => {},
	firstPlayerTitle: '',
	setFirstPlayerTitle: val => {},
	compChose: false,
	setCompChose: val => {},
	compChoice: 0,
	setCompChoice: val => {},
	isNewGameStart: false,
	setIsNewGameStart: val => {},
});

export const GameProvider = ({ children }) => {
	const [firstPlayerChose, setFirstPlayerChose] = useState(false);
	const [firstPlayerTitle, setFirstPlayerTitle] = useState('scissors');
	const [compChose, setCompChose] = useState(false);
	const [compChoice, setCompChoice] = useState(1);
	const [isNewGameStart, setIsNewGameStart] = useState(false);

	const value = {
		firstPlayerChose,
		setFirstPlayerChose,
		firstPlayerTitle,
		setFirstPlayerTitle,
		compChoice,
		setCompChoice,
		compChose,
		setCompChose,
		isNewGameStart,
		setIsNewGameStart,
	};

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
