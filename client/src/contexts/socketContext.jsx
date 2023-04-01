import { createContext, useState } from 'react';

export const SocketContext = createContext({
	sockets: [],
	setSocket: val => {},
});

export const SocketProvider = ({ children }) => {
	const [sockets, setSocket] = useState([]);

	const value = {
		sockets,
		setSocket,
	};

	return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
};
