import styled, { css, keyframes } from 'styled-components';

const fadeAway = keyframes`
    from {
        transform: translate(-50%, -500%);
        opacity: 1;
    } to {
        transform: translate(-50%, -1000%);
        opacity: 0;
    }
`;

export const StyledBoard = styled.div`
	position: absolute;
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-template-rows: repeat(10, 1fr);
	top: 10%;
	right: 10%;
	bottom: 20%;
	left: 10%;
	border: 1px solid black;
	transition: all 0.075s ease-in-out;
	z-index: -2;

	${({ gameInPlay }) =>
		!gameInPlay &&
		css`
			background-color: rgba(0, 0, 0, 0.4);
		`}
`;

export const StyledGameCell = styled.div`
	height: 100%;
	width: 100%;
	border: 1px solid black;

	${({ head }) =>
		head &&
		css`
			background-color: black;
		`}

	${({ body }) =>
		body &&
		css`
			background-color: black;
		`}

    ${({ food }) =>
		food &&
		css`
			background-color: red;
		`}
`;

export const StyledModal = styled.div`
	${({ theme: { flexin } }) => flexin('flex-start', 'center', 'column')}
	position: absolute;
	top: 50%;
	left: 50%;
	width: 75vw;
	padding: 25px;
	background-color: rgba(255, 255, 255, 0.925);
	border: 1px solid black;
	font-size: 16px;
	line-height: 20px;
	transform: translate(-50%, -50%);
	z-index: 9999;

	& > * {
		position: relative;
		z-index: 2;
	}
`;

export const StyledH4 = styled.h4`
	margin-bottom: 50px;
	font-size: 50px;
	text-transform: uppercase;
`;

export const StyledP = styled.p`
	margin-bottom: 50px;
	font-size: 16px;
	line-height: 22px;
	letter-spacing: 0.5px;
	text-align: center;
`;

export const StyledButton = styled.button`
	${({ theme: { button } }) => button}
	width: 50%;
	z-index: 9999;

	&:not(:last-of-type) {
		margin-bottom: 15px;
	}
`;

export const StyledSection = styled.section`
	position: relative;
	height: 100vh;
`;

export const StyledH6 = styled.h6`
	position: absolute;
	top: 50%;
	left: 50%;
	font-size: 20vh;
	line-height: 24px;
	letter-spacing: 1px;
	transition: all 1s ease-in-out;
	transform: translate(-50%, -500%);
	z-index: 0;

	${({ showInstructions }) =>
		!showInstructions &&
		css`
			animation: ${fadeAway} 1s linear;
		`}
`;

export const StyledScoreBox = styled.div`
	${({ theme: { flexin } }) => flexin()};
	padding: 10px 0;
	text-align: center;
`;

export const StyledH5 = styled.h5`
	font-size: 30px;
	font-weight: 300;
	line-height: 35px;
`;

export const StyledSpan = styled.span`
	font-size: 18px;
	font-weight: 100;
	line-height: 22px;
	text-transform: uppercase;
	letter-spacing: 0.75px;
	margin-right: 20px;
`;

export const StyledInput = styled.input`
	position: relative;
	width: 50%;
	margin: 15px 25%;
	background: none;
	border: none;
	border-left: 2px solid black;
	border-right: 2px solid black;
	font-size: 20px;
	line-height: 24px;
	letter-spacing: 0.25px;
	text-align: center;

	${({ playerNameError }) =>
		playerNameError &&
		css`
			border-left: 2px solid red;
			border-right: 2px solid red;
		`}
`;

export const StyledLengthIndicator = styled.div`
	margin: 10px 0;
	height: 1px;
	width: 100%;
	background-color: black;
	transform-origin: center;
	transition: all 0.3s ease-in-out;
	transform: ${props => `scaleX(${props.nameLength * 0.015})`};
`;
