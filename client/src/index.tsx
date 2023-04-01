import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { RulesProvider } from './contexts/rulesContext';
import { GameProvider } from './contexts/gameContext';
import { ScoreProvider } from './contexts/scoreContext';
import { ChoiceProvider } from './contexts/choiceContext';
import { SocketProvider } from './contexts/socketContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ChoiceProvider>
			<SocketProvider>
				<RulesProvider>
					<ScoreProvider>
						<GameProvider>
							<App />
						</GameProvider>
					</ScoreProvider>
				</RulesProvider>
			</SocketProvider>
		</ChoiceProvider>
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
