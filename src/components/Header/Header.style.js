import styled, { css } from 'styled-components';

export const StyledNav = styled.nav`
	${({ theme: { flexin } }) => flexin()}
	position: relative;
`;

export const StyledLinkBox = styled.div`
	position: absolute;
	left: 0;
	top: calc(100% - 18px);
	transform: translate(50%);
`;

export const StyledButton = styled.button`
	border: none;
	background-color: none;
	cursor: pointer;
	font-size: 14px;
	line-height: 18px;
	text-transform: uppercase;

	&[disabled] {
		cursor: not-allowed;
	}
`;

export const StyledSpan = styled.span`
	margin: 0 15px;
	font-size: 14px;
	line-height: 18px;
`;

export const StyledHeaderBox = styled.div``;

export const StyledH1 = styled.h1`
	text-align: center;
	text-transform: uppercase;
	transition: all 0.3s ease-in-out;

	${({ showGreeting }) =>
		showGreeting
			? css`
					font-size: 10vh;
					letter-spacing: 2.5px;
					line-height: 12vh;
					margin-top: 7.5vh;
			  `
			: css`
					font-size: 5vh;
					letter-spacing: 0.75px;
					line-height: 7vh;
					margin-top: 2.5vh;
			  `}
`;

export const StyledH2 = styled.h2`
	text-align: center;
	transition: all 0.3s ease-in-out;
	font-size: 2.5vh;
	font-style: italic;
	line-height: 3vh;

	${({ showGreeting }) =>
		!showGreeting &&
		css`
			opacity: 0;
			transform: translateY(500%);
		`}
`;

export const StyledSVGBox = styled.div`
	position: absolute;
	right: 0;
	transform: translate(-50%);
	transition: all 0.3s ease-in-out;
	${({ showGreeting }) =>
		showGreeting
			? css`
					opacity: 0;
					top: -100%;
			  `
			: css`
					opacity: 1;
					top: 50%;
			  `};
`;

export const StyledA = styled.a`
	display: inline-block;
	height: 50px;
	width: 50px;
	cursor: pointer;

	&:not(:last-of-type) {
		margin-right: 15px;
	}

	&:last-of-type {
		transition-delay: 0.15s;
	}
`;
