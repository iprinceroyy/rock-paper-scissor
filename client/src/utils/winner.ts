export const winner = (player1: string, player2: string): string | undefined => {
	if (
		(player1 === 'scissors' && player2 === 'paper') ||
		(player1 === 'paper' && player2 === 'rock') ||
		(player1 === 'rock' && player2 === 'scissors')
	)
		return player1;
	else if (
		(player2 === 'scissors' && player1 === 'paper') ||
		(player2 === 'paper' && player1 === 'rock') ||
		(player2 === 'rock' && player1 === 'scissors')
	)
		return player2;

	return 'draw';
};
