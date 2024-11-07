import React from 'react';

export default function ModalScResultHistoryResult({
	result,
	index
}){
	return(
		<tr
			className='sc-test-table-row'
			id={`sc-test-result-history-table-row-${index}`}
			key={`result-entry-${index}`}
		>
			<td
				className='sc-test-table-row-number'
			>
				{index+1}
			</td>
			<td
				className='sc-test-table-row-reaction-time'
			>
				{result} clicks
			</td>
		</tr>
	);
};
