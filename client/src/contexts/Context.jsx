import React, { createContext, useEffect, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
	const [gameInPlay, setGameInPlay] = useState(false);

	const [showGreeting, setShowGreeting] = useState(true);
	const [showHighScores, setShowHighScores] = useState(false);
	const [showGame, setShowGame] = useState(false);
	// const [showInstructions, setShowInstructions] = useState(localStorage.getItem('mclennanSnake') === null);
	const [showInstructions, setShowInstructions] = useState(true);

	const [topScores, setTopScores] = useState([]);

	const changePage = newPage => {
		setShowGreeting(newPage === 'greeting');
		setShowGame(newPage === 'game');
		setShowHighScores(newPage === 'scores');
	};

	useEffect(() => {
		const serverCall = new XMLHttpRequest();

		serverCall.addEventListener('progress', ({ loaded, total }) => {
			let percent = (loaded / total) * 100;
			// Update loader bar here
			console.log(percent);
		});

		serverCall.addEventListener('load', e => {
			// setTopScores();
			console.log(e);
		});

		serverCall.addEventListener('error', e => {
			console.error(e);
		});

		serverCall.addEventListener('abort', e => {
			console.error('The user cancelled this call');
		});

		serverCall.open('GET', 'https://www.myserver.com/getScores', true);
		serverCall.send();

		return setTopScores(
			[...Array(10).keys()].map(number => {
				return { rank: number, name: `Player ${number}`, score: `${10 - number}` };
			})
		);
	}, []);

	useEffect(() => {
		const serverCall = new XMLHttpRequest();

		serverCall.addEventListener('progress', e => {
			let percent = (e.loaded / e.total) * 100;
			// Update loader bar here
			console.log(percent);
		});

		serverCall.addEventListener('load', e => {
			console.log('The call is complete');
		});

		serverCall.addEventListener('error', e => {
			console.error(e);
		});

		serverCall.addEventListener('abort', e => {
			console.error('The user cancelled this call');
		});

		serverCall.open('POST', 'https://www.myserver.com/postScores', true);
		serverCall.send(topScores);
	}, [topScores]);

	return (
		<Context.Provider
			value={{
				// Values
				gameInPlay,
				showHighScores,
				showInstructions,
				showGame,
				showGreeting,
				topScores,
				// Functions
				changePage,
				setGameInPlay,
				setShowInstructions
			}}>
			{children}
		</Context.Provider>
	);
};

const ContextConsumer = Context.Consumer;

export { Context, ContextProvider, ContextConsumer };
