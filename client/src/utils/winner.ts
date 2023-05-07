export const winner = (player1: string, player2: string): string | undefined => {
	let winner: string = '';

	if (player1 === 'scissors') {
		if (player2 === 'scissors') winner = 'draw';
		else if (player2 === 'paper' || player2 === 'lizard') winner = player1;
		else winner = player2;
	} else if (player1 === 'paper') {
		if (player2 === 'paper') winner = 'draw';
		else if (player2 === 'rock' || player2 === 'spock') winner = player1;
		else winner = player2;
	} else if (player1 === 'rock') {
		if (player2 === 'rock') winner = 'draw';
		else if (player2 === 'lizard' || player2 === 'scissors') winner = player1;
		else winner = player2;
	} else if (player1 === 'lizard') {
		if (player2 === 'lizard') winner = 'draw';
		else if (player2 === 'spock' || player2 === 'paper') winner = player1;
		else winner = player2;
	} else if (player1 === 'spock') {
		if (player2 === 'spock') winner = 'draw';
		else if (player2 === 'scissors' || player2 === 'rock') winner = player1;
		else winner = player2;
	} else winner = 'draw';

	return winner;
};
