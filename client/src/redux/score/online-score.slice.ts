import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface OnlineScoreState {
	resultOut: boolean;
	winnerText: string;
	score: number;
	didWin: boolean;
}

const initialState = {
	resultOut: false,
	winnerText: '',
	score: 0,
	didWin: false,
} as OnlineScoreState;

export const onlineScoreSlice = createSlice({
	name: 'online-scorer',
	initialState,
	reducers: {
		increment: state => {
			state.score += 1;
		},

		decrement: state => {
			state.score -= state.score > 0 ? 1 : 0;
		},

		setResultOut: (state, action: PayloadAction<boolean>) => {
			state.resultOut = action.payload;
		},

		setWinnerText: (state, action: PayloadAction<string>) => {
			state.winnerText = action.payload;
		},

		setScore: (state, action: PayloadAction<number>) => {
			state.score = action.payload;
		},

		setDidWin: (state, action: PayloadAction<boolean>) => {
			state.didWin = action.payload;
		},
	},
});

export const { increment, decrement, setResultOut, setWinnerText, setScore, setDidWin } =
	onlineScoreSlice.actions;

export default onlineScoreSlice.reducer;
