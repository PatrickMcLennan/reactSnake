import React, { useContext } from 'react';

import {
	StyledA,
	StyledButton,
	StyledHeaderBox,
	StyledH1,
	StyledH2,
	StyledLinkBox,
	StyledNav,
	StyledSpan,
	StyledSVGBox
} from './Header.style';

import { Context } from 'Context/Context';

import GithubSVG from 'Component/svgs/GithubSVG';
import LinkedInSVG from 'Component/svgs/LinkedInSVG';

const Header = () => {
	const { changePage, gameInPlay, setGameInPlay, showGreeting, showGame } = useContext(Context);

	return (
		<StyledNav>
			{!showGreeting && (
				<StyledLinkBox>
					<StyledButton
						disabled={gameInPlay}
						onClick={showGame ? () => changePage('scores') : () => changePage('game')}>
						{showGame ? 'High Scores' : 'Play'}
					</StyledButton>
					<StyledSpan>-</StyledSpan>
					<StyledButton disabled={gameInPlay} onClick={() => changePage('greeting')}>
						Home
					</StyledButton>
					<StyledSpan gameInPlay={gameInPlay} endGameButton={true}>
						-
					</StyledSpan>
					<StyledButton gameInPlay={gameInPlay} endGameButton={true} onClick={() => setGameInPlay(false)}>
						End Game
					</StyledButton>
				</StyledLinkBox>
			)}

			<StyledHeaderBox>
				<StyledH1 showGreeting={showGreeting}>Snake</StyledH1>
				<StyledH2 showGreeting={showGreeting}>You know what this is.</StyledH2>
			</StyledHeaderBox>

			<StyledSVGBox showGreeting={showGreeting}>
				<StyledA href="https://www.github.com/patrickmclennan" target="_blank">
					<GithubSVG />
				</StyledA>
				<StyledA href="https://www.linkedin.com/in/patrick-mclennan-42002a172" target="_blank">
					<LinkedInSVG />
				</StyledA>
			</StyledSVGBox>
		</StyledNav>
	);
};

export default Header;
