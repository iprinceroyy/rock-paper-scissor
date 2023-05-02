import { ReactNode, useState, createContext } from 'react';

interface ScoreContextType {
	score: number;
	setScore: (val: number) => void;
	incrementScore: (val: number) => void;
	decrementScore: (val: number) => void;
	didWin: boolean;
	setDidWin: (val: boolean) => void;
}

export const ScoreContext = createContext<ScoreContextType>({
	score: 0,
	setScore: val => {},
	incrementScore: val => {},
	decrementScore: val => {},
	didWin: false,
	setDidWin: val => {},
});

interface ScoreProviderPropsType {
	children: ReactNode;
}

export const ScoreProvider = ({ children }: ScoreProviderPropsType) => {
	const [score, setScore] = useState(0);
	const [didWin, setDidWin] = useState(false);

	const incrementScore = (currentScore: number) => setScore(currentScore + 1);

	const decrementScore = (currentScore: number) => currentScore > 0 && setScore(currentScore - 1);

	const value = { score, setScore, didWin, setDidWin, incrementScore, decrementScore };

	return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>;
};
