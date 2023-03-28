import { createContext, useState } from 'react';

export const GameContext = createContext({
	isBtnClicked: false,
	setIsBtnClicked: val => {},
	btnVal: '',
	setBtnVal: val => {},
	compChoice: '',
	setCompChoice: val => {},
	isLoading: false,
	setIsLoading: val => {},
	isNewGameStart: false,
	setIsNewGameStart: val => {},
});

export const GameProvider = ({ children }) => {
	const [btnVal, setBtnVal] = useState('scissors');
	const [isBtnClicked, setIsBtnClicked] = useState(false);
	const [compChoice, setCompChoice] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [isNewGameStart, setIsNewGameStart] = useState(false);

	const value = {
		isBtnClicked,
		setIsBtnClicked,
		btnVal,
		setBtnVal,
		compChoice,
		setCompChoice,
		isLoading,
		setIsLoading,
		isNewGameStart,
		setIsNewGameStart,
	};

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
