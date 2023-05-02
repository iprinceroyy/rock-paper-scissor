import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { RulesProvider } from './contexts/rules.context';
import { GameProvider } from './contexts/game.context';
import { ScoreProvider } from './contexts/score.context';
import { SocketProvider } from './contexts/socket.context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<SocketProvider>
					<RulesProvider>
						<ScoreProvider>
							<GameProvider>
								<App />
							</GameProvider>
						</ScoreProvider>
					</RulesProvider>
				</SocketProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
