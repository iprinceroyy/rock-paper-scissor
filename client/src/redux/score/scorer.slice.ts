import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ScorerState {
	score: number;
	winner: string;
}

const initialState = {
	score: 0,
	winner: '',
} as ScorerState;

export const scorerSlice = createSlice({
	name: 'scorer',
	initialState,
	reducers: {
		increment: state => {
			state.score += 1;
		},

		decrement: state => {
			state.score -= state.score > 0 ? 1 : 0;
		},

		updateWinner: (state, action: PayloadAction<string>) => {
			state.winner = action.payload;
		},
	},
});

export const { increment, decrement, updateWinner } = scorerSlice.actions;

export default scorerSlice.reducer;
