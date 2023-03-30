import { useState, createContext } from 'react';

export const ChoiceContext = createContext({
	playOnline: true,
	setPlayOnline: val => {},
	playOffline: false,
	setPlayOffline: val => {},
});

export const ChoiceProvider = ({ children }) => {
	const [playOnline, setPlayOnline] = useState(false);
	const [playOffline, setPlayOffline] = useState(false);

	const value = { playOnline, setPlayOnline, playOffline, setPlayOffline };
	return <ChoiceContext.Provider value={value}>{children}</ChoiceContext.Provider>;
};
