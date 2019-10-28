import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import Game from 'Component/Game/Game';
import Greeting from 'Component/Greeting/Greeting';
import Header from 'Component/Header/Header';
import HighScores from 'Component/HighScores/HighScores';

import { Context } from 'Context/Context';

import { GlobalStyle, theme } from 'Utility/globalStyles';

const App = () => {
	const { showGreeting, showHighScores, showGame } = useContext(Context);
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Header />
				{showGreeting && <Greeting />}
				{showGame && <Game />}
				{showHighScores && <HighScores />}
			</ThemeProvider>
		</>
	);
};

export default App;
