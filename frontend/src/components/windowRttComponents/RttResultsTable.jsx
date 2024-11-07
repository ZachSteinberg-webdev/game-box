import React from 'react';

export default function RttResultsTable(){
	return(
		<div
			className='rtt-test-results-container-in-click-prompt'
		>
			<div
				className='rtt-test-table-header-container'
			>
				<table
					className='rtt-test-table-header'
				>
					<thead
						className='rtt-test-table-header'
					>
						<tr
							className='rtt-test-table-header-row'
						>
							<th
								className='rtt-test-table-header-click-number'
							>
								Click
							</th>
							<th
								className='rtt-test-table-header-reaction-time'
							>
								Reaction time
							</th>
							<th
								className='rtt-test-table-header-running-average'
							>
								Running average
							</th>
						</tr>
					</thead>
				</table>
			</div>
			<div
				className='rtt-test-table-container'
			>
				<table
					className='rtt-test-table'
				>
					<tbody
						className='rtt-test-table-body'
					>
					</tbody>
				</table>
			</div>
		</div>
	);
};
