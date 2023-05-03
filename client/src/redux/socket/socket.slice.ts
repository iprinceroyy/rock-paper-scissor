import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SocketState {
	room: string;
	sockets: string[];
}

const initialState = {
	room: '',
	sockets: [],
} as SocketState;

export const socketSlice = createSlice({
	name: 'socket',
	initialState,
	reducers: {
		setRoom: (state, action: PayloadAction<string>) => {
			state.room = action.payload;
		},

		setSockets: (state, action: PayloadAction<string[]>) => {
			state.sockets = [...action.payload];
		},
	},
});

export const { setRoom, setSockets } = socketSlice.actions;

export default socketSlice.reducer;
