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

	const [direction, setDirection] = useState(39);

	const [head, setHead] = useState(51);
	const [body, setBody] = useState([head]);
	const [tail, setTail] = useState(body.length - 1);
	const [food, setFood] = useState();

	// const handleSave = () => {
	// 	localStorage.setItem('mclennanSnake', true);
	// 	return setShowInstructions(false);
	// };

	// const countDownRecursive = number => {
	// 	if (number > -1) {
	// 		setCountdown(number);
	// 		return setTimeout(() => countDownRecursive(number - 1), 1000);
	// 	} else {
	// 		window.addEventListener('keydown', ({ keyCode }) => setDirection(keyCode));
	// 		setGameInPlay(true);
	// 		keepOnRunnin(moveBody);
	// 	}
	// };

	// const handleDismiss = () => {
	// 	setShowInstructions(false);
	// 	return countDownRecursive(countdown);
	// };

	// const keepOnRunnin = callback => {
	// 	callback();
	// 	return gameInPlay && setTimeout(() => keepOnRunnin(), 1000);
	// };

	// useEffect(() => {
	// 	setFood(placeFood);
	// }, []);

	// setCountdown(countdown);
	// setDirection(direction);
	// setHead(head);

	// useEffect(() => {
	// 	console.log('hello');
	// }, [showInstructions === false]);

	const moveBody = () => {
		switch (direction) {
			case 38:
				// up
				body.length < 3
					? setBody([head - 10, head, ...body])
					: setBody([head - 10, head, ...body].slice(0, [head - 10, head, ...body].length - 1));
				return setHead(head - 10);
			case 40:
				// down
				body.length < 3
					? setBody([head + 10, head, ...body])
					: setBody([head + 10, head, ...body].slice(0, [head + 10, head, ...body].length - 1));
				return setHead(head + 10);
			case 37:
				// left
				body.length < 3
					? setBody([head - 1, head, ...body])
					: setBody([head - 1, head, ...body].slice(0, [head - 1, head, ...body].length - 1));
				return setHead(head - 1);
			case 39:
			default:
				// right
				body.length < 3
					? setBody([head + 1, head, ...body])
					: setBody([head + 1, head, ...body].slice(0, [head + 1, head, ...body].length - 1));
				return setHead(head + 1);
		}
	};

	useEffect(() => {
		let number = Math.floor(Math.random() * 100);
		while (number === head || body.includes(number)) {
			number = Math.floor(Math.random() * 100);
		}
		setFood(number);
	}, [head === food]);

	useEffect(() => {
		countdown > -1 && setTimeout(() => setCountdown(countdown - 1), 1000);
		countdown === -1 && setGameInPlay(true);
		countdown === -1 && setDirection(39);
	}, [!showInstructions && countdown]);

	useEffect(() => {
		window.addEventListener('keydown', ({ keyCode }) => {
			setDirection(prevKey => {
				switch (prevKey) {
					case 38 && keyCode === 40:
						return 38;
					case 40 && keyCode === 38:
						return 40;
					case 37 && keyCode === 39:
						return 37;
					case 39 && keyCode === 37:
						return 39;
					default:
						return keyCode;
				}
			});
		});
	}, [!showInstructions && gameInPlay]);

	// useEffect(() => {
	// 	console.log(direction);
	// }, [direction]);

	useEffect(() => {
		// setTimeout(() => )
	}, [gameInPlay && head]);

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
