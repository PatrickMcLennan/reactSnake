import styled, { css } from 'styled-components';

export const StyledSection = styled.section`
	${({ theme: { flexin } }) => flexin('center', 'center', 'column')}
	height: 100vh;
`;

export const StyledTable = styled.table`
	width: 85vw;
	border-collapse: collapse;
	transform: translateY(-15vh);
`;

export const StyledTH = styled.th`
	position: relative;
	padding: 10px 0;
	font-size: 25px;
	font-weight: 100;
	letter-spacing: 1.5px;
	line-height: 30px;
	text-align: center;
	text-transform: uppercase;

	${({ center }) =>
		center &&
		css`
			border-left: 1px solid black;
			border-right: 1px solid black;
		`}
`;

export const StyledTR = styled.tr`
	border-bottom: 1px solid black;

	&:last-of-type {
		border-bottom: none;
	}
`;

export const StyledTD = styled.td`
	padding: 10px 10px;
	font-size: 16px;
	font-weight: 100;
	line-height: 20px;
	text-align: right;

	${({ center }) =>
		center &&
		css`
			border-left: 1px solid black;
			border-right: 1px solid black;
		`}
`;
