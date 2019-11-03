import React, { useContext, useEffect, useState } from 'react';
import {
	StyledBoard,
	StyledButton,
	StyledGameCell,
	StyledH4,
	StyledH6,
	StyledModal,
	StyledP,
	StyledSection
} from './Game.style';

import { Context } from 'Context/Context';

const Game = () => {
	const { gameInPlay, setGameInPlay, showInstructions, setShowInstructions } = useContext(Context);

	const [countdown, setCountdown] = useState(3);

	const [direction, setDirection] = useState();

	const [head, setHead] = useState(51);
	const [body, setBody] = useState([]);
	const [food, setFood] = useState();

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

	const getRandomFood = () => {
		let number = Math.floor(Math.random() * 100);
		while (number === head || body.includes(number)) {
			number = Math.floor(Math.random() * 100);
		}
		return number;
	};

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
			(currentHead === 89 && nextHead === 90)
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
			// Player hit Top + Bottom Walls
			return true;
		} else if (body.includes(nextHead)) {
			// Player hit Own Tail
			return true;
		}
	};

	useEffect(() => {
		setFood(getRandomFood);
	}, []);

	useEffect(() => {
		countdown > -1 && setTimeout(() => setCountdown(countdown - 1), 1000);
		countdown === -1 && setGameInPlay(true);
		countdown === -1 && setDirection(39);
	}, [!showInstructions && countdown]);

	useEffect(() => {
		window.addEventListener('keydown', ({ keyCode }) => {
			let nextDirection;
			switch (keyCode) {
				case 38 && direction === 40:
					nextDirection = 38;
				case 40 && direction === 38:
					nextDirection = 40;
				case 37 && direction === 39:
					nextDirection = 37;
				case 39 && direction === 37:
					nextDirection = 39;
				default:
					nextDirection = keyCode;
			}
			setDirection(nextDirection);
		});
	}, [!showInstructions && gameInPlay]);

	useEffect(() => {
		if (head === food) {
			setFood(getRandomFood);
			setBody([head, ...body]);
		} else {
			body.length < 3 ? setBody([head, ...body]) : setBody([head, ...body.slice(0, body.length - 1)]);
		}
		const nextHead = getNextSquare();
		const playerHasLost = nextMoveIsInvalid(head, nextHead);
		playerHasLost ? setGameInPlay(false) : setTimeout(() => setHead(nextHead), 250);
	}, [head]);

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
			{countdown === 3 && <StyledH6 current={countdown === 3}>{countdown}</StyledH6>}
			{countdown === 2 && <StyledH6 current={countdown === 2}>{countdown}</StyledH6>}
			{countdown === 1 && <StyledH6 current={countdown === 1}>{countdown}</StyledH6>}
			{countdown === 0 && <StyledH6 current={countdown === 0}>GO!</StyledH6>}
		</StyledSection>
	);
};

export default Game;
