import React, { useContext } from 'react';
import { StyledButton, StyledButtonBox } from './Greeting.style';

import { Context } from 'Context/Context';

import { StyledSection } from './Greeting.style';

const Greeting = () => {
	const { changePage } = useContext(Context);
	return (
		<StyledSection>
			<StyledButtonBox>
				<StyledButton onClick={() => changePage('game')}>Play</StyledButton>
				<StyledButton onClick={() => changePage('scores')}>See High Scores</StyledButton>
			</StyledButtonBox>
		</StyledSection>
	);
};

export default Greeting;
