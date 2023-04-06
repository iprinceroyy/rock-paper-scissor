import { createContext, useState, ReactNode } from 'react';

interface RulesContextType {
	isClicked: boolean;
	setIsClicked: (val: boolean) => void;
}

interface RulesProviderPropsType {
	children: ReactNode;
}

export const RulesContext = createContext<RulesContextType>({
	isClicked: false,
	setIsClicked: val => {},
} as RulesContextType);

export const RulesProvider = ({ children }: RulesProviderPropsType) => {
	const [isClicked, setIsClicked] = useState(false);

	const value = { isClicked, setIsClicked };
	return <RulesContext.Provider value={value}>{children}</RulesContext.Provider>;
};
