import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface OnlinePlayersState {
	isPlaying: boolean;
	playerOneActive: boolean;
	playerChoice: string;
	gamePlay: boolean;
	opponent: string;
	gameStatus: string;
	gameRestartMessage: string;
}

const initialState = {
	isPlaying: false,
	playerOneActive: false,
	playerChoice: '',
	gamePlay: false,
	opponent: '',
	gameStatus: '',
	gameRestartMessage: '',
} as OnlinePlayersState;

export const onlinePlayersSlice = createSlice({
	name: 'players',
	initialState,
	reducers: {
		setIsPlaying: (state, action: PayloadAction<boolean>) => {
			state.isPlaying = action.payload;
		},

		setPlayerOneActive: (state, action: PayloadAction<boolean>) => {
			state.playerOneActive = action.payload;
		},

		setPlayerChoice: (state, action: PayloadAction<string>) => {
			state.playerChoice = action.payload;
		},

		setGamePlay: (state, action: PayloadAction<boolean>) => {
			state.gamePlay = action.payload;
		},

		setOpponent: (state, action: PayloadAction<string>) => {
			state.opponent = action.payload;
		},

		setGameStatus: (state, action: PayloadAction<string>) => {
			state.gameStatus = action.payload;
		},

		setGameRestartMessage: (state, action: PayloadAction<string>) => {
			state.gameRestartMessage = action.payload;
		},
	},
});

export const {
	setIsPlaying,
	setPlayerOneActive,
	setPlayerChoice,
	setGamePlay,
	setOpponent,
	setGameStatus,
	setGameRestartMessage,
} = onlinePlayersSlice.actions;

export default onlinePlayersSlice.reducer;
