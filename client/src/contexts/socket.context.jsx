import { createContext, useState } from 'react';

export const SocketContext = createContext({
	sockets: [],
	setSocket: val => {},
	isPlaying: false,
	setIsPlaying: val => {},
});

export const SocketProvider = ({ children }) => {
	const [sockets, setSocket] = useState([]);
	const [isPlaying, setIsPlaying] = useState(false);

	const value = {
		sockets,
		setSocket,
		isPlaying,
		setIsPlaying,
	};

	return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
};
