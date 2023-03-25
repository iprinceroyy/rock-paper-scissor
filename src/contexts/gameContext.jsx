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
});

export const GameProvider = ({ children }) => {
	const [btnVal, setBtnVal] = useState('scissors');
	const [isBtnClicked, setIsBtnClicked] = useState(false);
	const [compChoice, setCompChoice] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	const value = {
		isBtnClicked,
		setIsBtnClicked,
		btnVal,
		setBtnVal,
		compChoice,
		setCompChoice,
		isLoading,
		setIsLoading,
	};

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
