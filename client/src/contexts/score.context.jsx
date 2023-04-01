import { useState, createContext } from 'react';

export const ScoreContext = createContext({
	score: 0,
	setScore: val => {},
});

export const ScoreProvider = ({ children }) => {
	const [score, setScore] = useState(0);

	const value = { score, setScore };

	return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>;
};
