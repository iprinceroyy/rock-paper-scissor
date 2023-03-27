import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Replace with your server URL

function Online() {
	const [playerId, setPlayerId] = useState(null);
	const [players, setPlayers] = useState({});

	useEffect(() => {
		// When the component mounts, listen for the player ID and list of players
		socket.on('playerId', id => {
			setPlayerId(id);
		});

		socket.on('players', players => {
			setPlayers(players);
		});

		// When the component unmounts, disconnect from the server
		return () => {
			socket.disconnect();
		};
	}, []);

	const handleMove = direction => {
		// When the player moves, emit a 'move' event to the server
		socket.emit('move', direction);
	};

	return (
		<div>
			<h1>Online Multiplayer Game</h1>
			<p>Player ID: {playerId}</p>
			<ul>
				{Object.keys(players).map(id => (
					<li key={id}>
						Player {id}: ({players[id].x}, {players[id].y})
					</li>
				))}
			</ul>
			<button onClick={() => handleMove('up')}>Up</button>
			<button onClick={() => handleMove('down')}>Down</button>
			<button onClick={() => handleMove('left')}>Left</button>
			<button onClick={() => handleMove('right')}>Right</button>
		</div>
	);
}

export default Online;
