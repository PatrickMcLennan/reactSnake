import styled from 'styled-components';

export const StyledSection = styled.section`
	${({ theme: { page } }) => page}
`;

export const StyledButtonBox = styled.div`
	width: 25vw;
	margin-top: 25vh;
	margin-left: 50vw;
	transform: translateX(-50%);
`;

export const StyledButton = styled.button`
	${({ theme: { button } }) => button}
	display: block;
	cursor: pointer;

	&:not(:last-of-type) {
		margin-bottom: 25px;
	}
`;
