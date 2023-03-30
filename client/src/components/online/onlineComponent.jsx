import { sendMessage, connection, receivedMessage } from '../../utils/script';

const Online = () => {
	const handleClick = e => {
		connection();
		sendMessage();
		receivedMessage();
	};

	return (
		<div>
			<button onClick={handleClick}>Play Online</button>
		</div>
	);
};

export default Online;
