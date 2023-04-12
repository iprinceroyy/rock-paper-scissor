import { ReactNode, useState, createContext } from 'react';

interface ScoreContextType {
	score: number;
	setScore: (val: number) => void;
	didWin: boolean;
	setDidWin: (val: boolean) => void;
}

export const ScoreContext = createContext<ScoreContextType>({
	score: 0,
	setScore: (val: number) => {},
} as ScoreContextType);

interface ScoreProviderPropsType {
	children: ReactNode;
}

export const ScoreProvider = ({ children }: ScoreProviderPropsType) => {
	const [score, setScore] = useState(0);
	const [didWin, setDidWin] = useState(false);

	const value = { score, setScore, didWin, setDidWin };

	return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>;
};
