import React from 'react';

export default function ScResultsTable(){
	return(
		<div
			className='sc-test-results-container-in-click-prompt'
		>
			<div
				className='sc-test-table-header-container'
			>
				<table
					className='sc-test-table-header'
				>
					<thead
						className='sc-test-table-header'
					>
						<tr
							className='sc-test-table-header-row'
						>
							<th
								className='sc-test-table-header-click-number'
							>
								Round
							</th>
							<th
								className='sc-test-table-header-reaction-time'
							>
								Number of Clicks
							</th>
							<th
								className='sc-test-table-header-running-average'
							>
								Running average
							</th>
						</tr>
					</thead>
				</table>
			</div>
			<div
				className='sc-test-table-container'
			>
				<table
					className='sc-test-table'
				>
					<tbody
						className='sc-test-table-body'
					>
					</tbody>
				</table>
			</div>
		</div>
	);
};
