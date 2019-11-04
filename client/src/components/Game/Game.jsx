import React, { useContext, useEffect, useState } from 'react';
import {
	StyledBoard,
	StyledButton,
	StyledGameCell,
	StyledH4,
	StyledH5,
	StyledH6,
	StyledInput,
	StyledLengthIndicator,
	StyledModal,
	StyledP,
	StyledScoreBox,
	StyledSection,
	StyledSpan
} from './Game.style';

import { Context } from 'Context/Context';

const Game = () => {
	const { changePage, gameInPlay, setGameInPlay, showInstructions, setShowInstructions, topScores } = useContext(
		Context
	);

	const [countdown, setCountdown] = useState(3);
	const [playerHasLost, setPlayerHasLost] = useState(false);
	const [playerName, setPlayerName] = useState('');

	const [direction, setDirection] = useState();

	const [head, setHead] = useState(51);
	const [body, setBody] = useState([]);
	const [food, setFood] = useState();

	// Get Heads next square #
	const getNextSquare = () => {
		switch (direction) {
			case 38: // up
				return head - 10;
			case 40: // down
				return head + 10;
			case 37: // left
				return head - 1;
			case 39: // right
			default:
				return head + 1;
		}
	};

	// Change Heads direction on keydown, prevent Head from colliding with Neck
	const handleKeydown = (newDirection, currentDirection) => {
		if (newDirection === 38 && currentDirection === 40) {
			// Moving up trying to go down
			return 40;
		} else if (newDirection === 40 && currentDirection === 38) {
			// Moving down trying to go up
			return 38;
		} else if (newDirection === 37 && currentDirection === 39) {
			// Moving left trying to go right
			return 39;
		} else if (newDirection === 39 && currentDirection === 37) {
			// Moving right trying to go left
			return 37;
		} else if (![37, 38, 39, 40].includes(newDirection)) {
			// Not an arrow key
			return currentDirection;
		} else {
			// New direction is valid and non-conflicting
			return newDirection;
		}
	};

	const handleSubmit = () => console.log(playerName);

	// Place food randomly, prevent collision with snake
	const getRandomFood = () => {
		let number = Math.floor(Math.random() * 100);
		while (number === head || body.includes(number)) {
			number = Math.floor(Math.random() * 100);
		}
		return number;
	};

	// Determine if the Heads next square is Valid
	const nextMoveIsInvalid = (currentHead, nextHead) => {
		if (
			// Player hit Right Wall
			(currentHead === 9 && nextHead === 10) ||
			(currentHead === 19 && nextHead === 20) ||
			(currentHead === 29 && nextHead === 30) ||
			(currentHead === 39 && nextHead === 40) ||
			(currentHead === 49 && nextHead === 50) ||
			(currentHead === 59 && nextHead === 60) ||
			(currentHead === 69 && nextHead === 70) ||
			(currentHead === 79 && nextHead === 80) ||
			(currentHead === 89 && nextHead === 90) ||
			(currentHead === 99 && nextHead === 100)
		) {
			return true;
		} else if (
			// Player hit Left Wall
			(currentHead === 10 && nextHead === 9) ||
			(currentHead === 20 && nextHead === 19) ||
			(currentHead === 30 && nextHead === 29) ||
			(currentHead === 40 && nextHead === 39) ||
			(currentHead === 50 && nextHead === 49) ||
			(currentHead === 60 && nextHead === 59) ||
			(currentHead === 70 && nextHead === 69) ||
			(currentHead === 80 && nextHead === 79) ||
			(currentHead === 90 && nextHead === 89)
		) {
			return true;
		} else if (nextHead > 100 || nextHead < 0) {
			// Player hit Top or Bottom Wall
			return true;
		} else if (body.includes(nextHead)) {
			// Player hit Own Tail
			return true;
		}
	};

	// Set up Game, Reset to Defaults after unmount
	useEffect(() => {
		setFood(getRandomFood);
		setGameInPlay(false);
		window.addEventListener('keydown', ({ keyCode }) =>
			setDirection(prevDirection => handleKeydown(keyCode, prevDirection))
		);

		return () => {
			setCountdown(3);
			setGameInPlay(false);
			setPlayerHasLost(false);
			setShowInstructions(true);
		};
	}, []);

	// Dismiss Instructions, begin Recursive Countdown, Start Game at 0, Start Moving Right
	useEffect(() => {
		!showInstructions && countdown > -1 && setTimeout(() => setCountdown(countdown - 1), 1000);
		!showInstructions && countdown === 0 && setGameInPlay(true);
		countdown === 0 && setHead(52);
		countdown === 0 && setDirection(39);
	}, [countdown, showInstructions]);

	// Decide to move head or end game based on current + next head #'s.
	useEffect(() => {
		const nextHead = getNextSquare();
		if (playerHasLost) {
			return;
		} else if (head === food && !playerHasLost) {
			setFood(getRandomFood);
			setBody([head, ...body]);
		} else if (!playerHasLost) {
			body.length < 3 ? setBody([head, ...body]) : setBody([head, ...body.slice(0, body.length - 1)]);
		}
		setPlayerHasLost(nextMoveIsInvalid(head, nextHead));
		gameInPlay && setTimeout(() => setHead(nextHead), 125);
	}, [head]);

	useEffect(() => {
		setGameInPlay(false);
	}, [playerHasLost]);

	return (
		<StyledSection>
			<StyledBoard gameInPlay={gameInPlay}>
				{[...Array(100).keys()].map(number => (
					<StyledGameCell
						body={body.includes(number)}
						food={number === food}
						head={number === head}
						key={number}></StyledGameCell>
				))}
			</StyledBoard>
			{showInstructions && (
				<StyledModal>
					<StyledH4>How To Play</StyledH4>

					<StyledP>
						Use your arrow keys to direct the head of the snake towards the food. Be careful not to eat your
						own tail or run into a wall.
					</StyledP>

					<StyledButton onClick={() => setShowInstructions(false)}>Got it</StyledButton>
					<StyledButton onClick={() => handleSave()}>Don't show me this again</StyledButton>
				</StyledModal>
			)}
			{countdown === 3 && <StyledH6 showInstructions={showInstructions}>{countdown}</StyledH6>}
			{countdown === 2 && <StyledH6 showInstructions={showInstructions}>{countdown}</StyledH6>}
			{countdown === 1 && <StyledH6 showInstructions={showInstructions}>{countdown}</StyledH6>}
			{countdown === 0 && <StyledH6 showInstructions={showInstructions}>GO!</StyledH6>}

			{playerHasLost && (
				<StyledModal>
					<StyledH4>You've Lost</StyledH4>
					<StyledScoreBox>
						<StyledSpan>Your Score:</StyledSpan>
						<StyledH5>{body.length}</StyledH5>
					</StyledScoreBox>
					{topScores.filter(({ score }) => score >= body.length).length < 10 ? (
						<p>Top Score!</p>
					) : (
						<p>Not a top score</p>
					)}
					{topScores.filter(({ score }) => score >= body.length).length < 10 && (
						<>
							<StyledInput
								value={playerName}
								onChange={({ target: { value } }) => setPlayerName(value)}
							/>
							<StyledLengthIndicator nameLength={playerName.length} />
						</>
					)}
					<StyledButton
						onClick={
							topScores.filter(({ score }) => score >= body.length).length < 10
								? handleSubmit()
								: changePage('greeting')
						}>
						{topScores.filter(({ score }) => score >= body.length).length < 10
							? 'Submit Your Score'
							: 'Go Home'}
					</StyledButton>
					<StyledButton
						onClick={
							topScores.filter(({ score }) => score >= body.length).length < 10
								? handleSubmit()
								: changePage('greeting')
						}>
						{topScores.filter(({ score }) => score >= body.length).length < 10
							? "Nah, let's play again"
							: 'Try Again'}
					</StyledButton>
				</StyledModal>
			)}
		</StyledSection>
	);
};

export default Game;
