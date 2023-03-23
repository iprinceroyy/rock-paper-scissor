import { createContext, useState } from 'react';

export const GameContext = createContext({
	isBtnClicked: false,
	setIsBtnClicked: val => {},
	btnVal: '',
	setBtnVal: val => {},
});

export const GameProvider = ({ children }) => {
	const [btnVal, setBtnVal] = useState('scissors');
	const [isBtnClicked, setIsBtnClicked] = useState(false);

	const value = {
		isBtnClicked,
		setIsBtnClicked,
		btnVal,
		setBtnVal,
	};

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
