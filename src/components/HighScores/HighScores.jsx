import React, { useContext } from 'react';
import { StyledSection, StyledTable, StyledTD, StyledTH, StyledTR } from './HighScores.style';

import { Context } from 'Context/Context';

const HighScores = () => {
	const { topScores } = useContext(Context);

	return (
		<StyledSection>
			<StyledTable>
				<thead>
					<StyledTR>
						<StyledTH>Rank</StyledTH>
						<StyledTH center={true}>Name</StyledTH>
						<StyledTH>Score</StyledTH>
					</StyledTR>
				</thead>
				<tbody>
					{topScores.map(({ rank, name, score }, i) => (
						<StyledTR key={i}>
							<StyledTD>{rank}</StyledTD>
							<StyledTD center={true}>{name}</StyledTD>
							<StyledTD>{score}</StyledTD>
						</StyledTR>
					))}
				</tbody>
			</StyledTable>
		</StyledSection>
	);
};

export default HighScores;
