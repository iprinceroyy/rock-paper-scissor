import { useState, useContext } from 'react';

import {
	sendMessage,
	connection,
	receivedMessage,
	joinRoom,
	assignUserId,
	usersList,
	showUser,
} from './utils/script';

import GameStart from './components/gameStart/GameStartComponent';

import './App.scss';
import { ChoiceContext } from './contexts/choiceContext';

const App = () => {
	const [user, setUser] = useState('');
	const { playOnline, setPlayOnline, playOffline, setPlayOffline } = useContext(ChoiceContext);

	const onlinePlayHandler = () => {
		setPlayOnline(true);
		connection();
		sendMessage();
		receivedMessage();
	};

	const offlinePlayHandler = () => setPlayOffline(true);

	const joinRoomHandler = (e: any) => {
		const currEl = e.target.innerText;
		joinRoom(currEl);
		sendMessage(`You connected with ${currEl}`, currEl);
	};

	const submitHandler = (e: any) => {
		e.preventDefault();
		assignUserId(user);
		showUser();
		if (usersList) console.log(usersList);
	};

	const handleChange = (e: any) => {
		setUser(e.target.value.toLowerCase());
	};

	return (
		<main className='App'>
			{!playOnline && playOffline ? (
				<GameStart />
			) : (
				<div className='choice'>
					<button type='button' onClick={onlinePlayHandler}>
						Play Online
					</button>
					<button type='button' onClick={offlinePlayHandler}>
						Play with computer
					</button>
				</div>
			)}
			{playOnline && (
				<div>
					<p onClick={joinRoomHandler}>Hangover</p>
					<p onClick={joinRoomHandler}>Fun</p>
					<br />
					<br />
					<form onSubmit={submitHandler}>
						<label htmlFor='user-name'>Enter Your name</label>
						<br />
						<input type='text' id='user-name' onChange={handleChange} />
						<button type='submit'>Submit</button>
					</form>
				</div>
			)}
		</main>
	);
};

export default App;
