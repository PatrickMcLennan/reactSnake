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
		/**
		 * Make API call here ...
		 */
		return setTopScores(
			[...Array(10).keys()].map(number => {
				return { rank: number, name: `Player ${number}`, score: `${10 - number}` };
			})
		);
	}, []);

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
