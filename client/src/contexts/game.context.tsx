import { createContext, useState, ReactNode } from 'react';

interface GameContextType {
	firstPlayerChose: boolean;
	setFirstPlayerChose: (val: boolean) => void;
	firstPlayerTitle: string;
	setFirstPlayerTitle: (val: string) => void;
	compChose: boolean;
	setCompChose: (val: boolean) => void;
	compChoice: number;
	setCompChoice: (val: number) => void;
	isNewGameStart: boolean;
	setIsNewGameStart: (val: boolean) => void;
}

interface GameProviderPropsType {
	children: ReactNode;
}

export const GameContext = createContext<GameContextType>({
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
} as GameContextType);

export const GameProvider = ({ children }: GameProviderPropsType) => {
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
