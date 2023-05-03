import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface PlayersState {
	firstPlayerChose: boolean;
	firstPlayerTitle: string;
	compChose: boolean;
	compChoiceTitle: string;
	isNewGameStart: boolean;
}

const initialState = {
	firstPlayerChose: false,
	firstPlayerTitle: '',
	compChose: false,
	compChoiceTitle: '',
	isNewGameStart: false,
} as PlayersState;

export const playersSlice = createSlice({
	name: 'players',
	initialState,
	reducers: {
		setFirstPlayerChose: (state, action: PayloadAction<boolean>) => {
			state.firstPlayerChose = action.payload;
		},

		setFirstPlayerTitle: (state, action: PayloadAction<string>) => {
			state.firstPlayerTitle = action.payload;
		},

		setCompChose: (state, action: PayloadAction<boolean>) => {
			state.compChose = action.payload;
		},

		setCompChoiceTitle: (state, action: PayloadAction<string>) => {
			state.compChoiceTitle = action.payload;
		},

		setIsNewGameStart: (state, action: PayloadAction<boolean>) => {
			state.isNewGameStart = action.payload;
		},
	},
});

export const {
	setFirstPlayerChose,
	setFirstPlayerTitle,
	setCompChoiceTitle,
	setCompChose,
	setIsNewGameStart,
} = playersSlice.actions;

export default playersSlice.reducer;
