import React from 'react';

export default function ModalRttResultHistoryResult({
	score,
	index
}){
	return(
		<tr
			className='otw-results-history-table-row'
			id={`otw-score-history-table-row-${index}`}
			key={`score-entry-${index}`}
		>
			<td
				className='otw-results-history-table-row-number'
			>
				{index+1}
			</td>
			<td
				className='otw-results-history-table-row-reaction-time'
			>
				{score} moves
			</td>
		</tr>
	);
};
