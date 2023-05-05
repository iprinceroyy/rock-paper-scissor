import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';

import scorerReducer from './score/scorer.slice';
import onlineScorerReducer from './score/online-score.slice';
import playersReducer from './players/players.slice';
import onlinePlayersReducer from './players/online-players.slice';
import socketReducer from './socket/socket.slice';
import rulesReducer from './rules/rules.slice';
import opponentStatusReducer from './status/opponent-status.slice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['scorer'],
};

const rootReducer = combineReducers({
	scorer: scorerReducer,
	players: playersReducer,
	onlineScorer: onlineScorerReducer,
	onlinePlayers: onlinePlayersReducer,
	socket: socketReducer,
	rules: rulesReducer,
	opponentStatus: opponentStatusReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
