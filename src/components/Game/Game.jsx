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
	const { gameInPlay, setGameInPlay, showGame, showInstructions, setShowInstructions } = useContext(Context);

	const [countdown, setCountdown] = useState(3);

	const [direction, setDirection] = useState('right');

	const [head, setHead] = useState(51);
	const [body, setBody] = useState([head]);
	const [tail, setTail] = useState(body.length - 1);
	const [food, setFood] = useState();

	const moveBody = () => {
		switch (direction) {
			case 'up':
				body.length < 3
					? setBody([head - 10, head, ...body])
					: setBody([head - 10, head, ...body].slice(0, [head - 10, head, ...body].length - 1));
				return setHead(head - 10);
			case 'bottom':
				body.length < 3
					? setBody([head + 10, head, ...body])
					: setBody([head + 10, head, ...body].slice(0, [head + 10, head, ...body].length - 1));
				return setHead(head + 10);
			case 'left':
				body.length < 3
					? setBody([head - 1, head, ...body])
					: setBody([head - 1, head, ...body].slice(0, [head - 1, head, ...body].length - 1));
				return setHead(head - 1);
			case 'right':
			default:
				body.length < 3
					? setBody([head + 1, head, ...body])
					: setBody([head + 1, head, ...body].slice(0, [head + 1, head, ...body].length - 1));
				return setHead(head + 1);
		}
	};

	const placeFood = () => {
		let number = Math.floor(Math.random() * 100);
		while (number === head || body.includes(number)) {
			number = Math.floor(Math.random() * 100);
		}
		return number;
	};

	const handleSave = () => {
		localStorage.setItem('mclennanSnake', true);
		return setShowInstructions(false);
	};

	const countDownRecursive = number => {
		if (number > -1) {
			setCountdown(number);
			return setTimeout(() => countDownRecursive(number - 1), 1000);
		} else if (number === -1) {
			setGameInPlay(true);
			keepOnRunnin(moveBody);
		}
	};

	const handleDismiss = () => {
		setShowInstructions(false);
		return countDownRecursive(countdown);
	};

	const keepOnRunnin = callback => {
		callback();
		console.log(head);
		return gameInPlay && setTimeout(() => keepOnRunnin(), 1000);
	};

	useEffect(() => {
		setFood(placeFood);
		window.addEventListener('keydown', ({ keyCode }) => {
			switch (keyCode) {
				case 38:
					return setDirection('up');
				case 40:
					return setDirection('bottom');
				case 37:
					return setDirection('left');
				case 39:
				default:
					return setDirection('right');
			}
		});
		return () => {
			setGameInPlay(false);
			setCountdown(3);
		};
	}, []);

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

					<StyledButton onClick={() => handleDismiss()}>Got it</StyledButton>
					<StyledButton onClick={() => handleSave()}>Don't show me this again</StyledButton>
				</StyledModal>
			)}
			{!showInstructions && countdown === 3 && <StyledH6 current={countdown === 3}>{countdown}</StyledH6>}
			{!showInstructions && countdown === 2 && <StyledH6 current={countdown === 2}>{countdown}</StyledH6>}
			{!showInstructions && countdown === 1 && <StyledH6 current={countdown === 1}>{countdown}</StyledH6>}
			{!showInstructions && countdown === 0 && <StyledH6 current={countdown === 0}>GO!</StyledH6>}
		</StyledSection>
	);
};

export default Game;
