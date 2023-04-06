import { createContext, useState } from 'react';

export const RulesContext = createContext({
	isClicked: false,
	setIsClicked: val => {},
});

export const RulesProvider = ({ children }) => {
	const [isClicked, setIsClicked] = useState(false);

	const value = { isClicked, setIsClicked };
	return <RulesContext.Provider value={value}>{children}</RulesContext.Provider>;
};
