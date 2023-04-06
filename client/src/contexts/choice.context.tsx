import { useState, createContext, ReactNode } from 'react';

interface ChoiceContextType {
	playOnline: boolean;
	setPlayOnline: (val: boolean) => void;
	playOffline: boolean;
	setPlayOffline: (val: boolean) => void;
}

interface ChoiceProviderPropsType {
	children: ReactNode;
}

export const ChoiceContext = createContext<ChoiceContextType>({
	playOnline: true,
	setPlayOnline: val => {},
	playOffline: false,
	setPlayOffline: val => {},
});

export const ChoiceProvider = ({ children }: ChoiceProviderPropsType) => {
	const [playOnline, setPlayOnline] = useState(false);
	const [playOffline, setPlayOffline] = useState(false);

	const value = { playOnline, setPlayOnline, playOffline, setPlayOffline };
	return <ChoiceContext.Provider value={value}>{children}</ChoiceContext.Provider>;
};
