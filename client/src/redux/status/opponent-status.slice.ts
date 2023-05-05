import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface OpponentStatusState {
	opponentPickedMessage: string;
	opponentRestartedMessage: string;
}

const initialState = {
	opponentPickedMessage: '',
	opponentRestartedMessage: '',
} as OpponentStatusState;

export const opponentStatusSlice = createSlice({
	name: 'opponent-status',
	initialState,
	reducers: {
		setOpponentPickedMessage: (state, action: PayloadAction<string>) => {
			state.opponentPickedMessage = action.payload;
		},

		setOpponentRestartedMessage: (state, action: PayloadAction<string>) => {
			state.opponentRestartedMessage = action.payload;
		},
	},
});

export const { setOpponentPickedMessage, setOpponentRestartedMessage } =
	opponentStatusSlice.actions;

export default opponentStatusSlice.reducer;
