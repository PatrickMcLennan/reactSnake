import styled, { css } from 'styled-components';

export const StyledBoard = styled.div`
	position: absolute;
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-template-rows: repeat(10, 1fr);
	gap: 1px solid black;
	top: 10%;
	right: 10%;
	bottom: 20%;
	left: 10%;
	border: 1px solid black;
	z-index: -2;
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
			padding: 10%;
			background-color: black;
		`}

    ${({ food }) =>
		food &&
		css`
			background-color: red;
		`}
`;

export const StyledModal = styled.div`
	position: absolute;
	width: 75vw;
	font-size: 16px;
	line-height: 20px;
	z-index: -1;
`;

export const StyledH4 = styled.h4`
	font-size: 20px;
	line-height: 24px;
	text-transform: uppercase;
`;

export const StyledButton = styled.button`
	${({ theme: { button } }) => button}
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
	opacity: 0;
	transition: all 1s ease-in-out;
	transform: translate(-50%, -500%);
	z-index: 0;

	${({ current }) => {
		current &&
			css`
				transform: translate(-50%, -200%);
				opacity: 1;
			`;
	}}
`;
