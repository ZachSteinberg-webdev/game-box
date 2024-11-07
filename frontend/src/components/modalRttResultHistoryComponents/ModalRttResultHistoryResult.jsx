import React from 'react';

export default function ModalRttResultHistoryResult({
	result,
	index
}){
	return(
		<tr
			className='rtt-test-table-row'
			id={`rtt-test-result-history-table-row-${index}`}
			key={`result-entry-${index}`}
		>
			<td
				className='rtt-test-table-row-number'
			>
				{index+1}
			</td>
			<td
				className='rtt-test-table-row-reaction-time'
			>
				{result/1000} seconds ({result} milliseconds)
			</td>
		</tr>
	);
};
