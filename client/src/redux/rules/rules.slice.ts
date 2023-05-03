import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface RulesState {
	showRules: boolean;
}

const initialState = {
	showRules: false,
} as RulesState;

export const rulesSlice = createSlice({
	name: 'rules',
	initialState,
	reducers: {
		setShowRules: (state, action: PayloadAction<boolean>) => {
			state.showRules = action.payload;
		},
	},
});

export const { setShowRules } = rulesSlice.actions;

export default rulesSlice.reducer;
