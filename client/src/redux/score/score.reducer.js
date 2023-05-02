import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	score: 0,
};

export const scoreSlice = createSlice({
	name: 'score',
	initialState,
	reducers: {},
});
