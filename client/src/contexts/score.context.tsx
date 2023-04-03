import { FC, ReactNode, useState, createContext } from 'react';

export const ScoreContext = createContext({
	score: 0,
	setScore: (val: number) => {},
});

type ScoreProviderProps = {
	children: ReactNode;
};

export const ScoreProvider: FC<ScoreProviderProps> = ({ children }) => {
	const [score, setScore] = useState(0);

	const value = { score, setScore };

	return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>;
};
