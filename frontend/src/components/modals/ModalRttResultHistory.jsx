import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';
import {UserContext} from '../../contexts/UserContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';
import ModalRttResultHistoryResult from '../modalRttResultHistoryComponents/ModalRttResultHistoryResult.jsx';

import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';
import useHandleRttResultsClear from '../../customHooks/formSubmissionHandlers/useHandleRttResultsClear.jsx';
import useHandleRttResultsSort from '../../customHooks/formSubmissionHandlers/useHandleRttResultsSort.jsx';

import '../../css/modals/ModalRttResultHistory.css';

export default function ModalRttResultHistory(){
	const {
		modals,
		setModals,
		windowModalOrdering,
		setWindowModalOrdering,
		appModalOrdering,
		setAppModalOrdering,
		modalShowClasses,
		setModalShowClasses
	}=useContext(ModalContext);
	const {user, setUser}=useContext(UserContext);
	const allTimeAverage=(user.rttResults.reduce((accumulator, currentValue)=>accumulator+currentValue, 0)/user.rttResults.length).toFixed(0);
	const modalClose=(e)=>{useModalClose(
		'ModalRttResultHistory',
		windowModalOrdering.openWindowsModals,
		setWindowModalOrdering.setOpenWindowsModals,
		appModalOrdering.openRttModals,
		setAppModalOrdering.setOpenRttModals,
		setModals.setModalRttResultHistoryOpen,
		setModalShowClasses.setModalRttResultHistoryOpenShowClass
	)};
	const handleRttResultsClear=(e)=>{useHandleRttResultsClear(setUser)};
	const handleRttResultsSort=(e)=>{
		const tableContainer=document.querySelector('.rtt-test-results-history-table-container');
		useHandleRttResultsSort(setUser);
		if(tableContainer.firstElementChild.firstElementChild.firstElementChild){
			const firstRow=tableContainer.firstElementChild.firstElementChild.firstElementChild;
			firstRow.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
		};
	};
	return(
		<Window
			windowClassName={`window-modal-container modal-container rtt-modal-container rtt-test-result-history-container ${modalShowClasses.modalRttResultHistoryOpenShowClass}`}
			windowId={'ModalRttResultHistory'}
		>
			<Titlebar
				titlebarClassName={'rtt-modal-title-bar rtt-test-result-history-title-bar drag-handle'}
			>
				<TitlebarTitle
					titleClassName={'rtt-test-result-history-title'}
					title={'Reaction Time Test Result History'}
				/>
			</Titlebar>
			<div
				className='rtt-test-results-history-container-in-click-prompt'
			>
				<div
					className='rtt-test-results-history-table-header-container'
				>
					<table
						className='rtt-test-results-history-table-header'
					>
						<thead
							className='rtt-test-results-history-table-header'
						>
							<tr
								className='rtt-test-results-history-table-header-row'
							>
								<th
									className='rtt-test-results-history-table-header-click-number'
								>
									Click
								</th>
								<th
									className='rtt-test-results-history-table-header-reaction-time'
								>
									Reaction time
								</th>
							</tr>
						</thead>
					</table>
				</div>
				<div
					className='rtt-test-results-history-table-container'
				>
					<table
						className='rtt-test-results-history-table'
					>
						<tbody
							className='rtt-test-results-history-table-body'
						>
							{user.rttResults.length>0?
								user.rttResults.map((result, index)=>{
									return(
										<ModalRttResultHistoryResult
											key={`result-entry-${index}`}
											result={result}
											index={index}
										/>
									);
								}):
								<tr
									className='rtt-test-table-row'
									id={`rtt-test-result-history-table-row`}
								>
									<td
										className='rtt-test-table-row-number'
									>
										N/A
									</td>
									<td
										className='rtt-test-table-row-reaction-time'
									>
										No results to display yet. Get clicking!
									</td>
								</tr>
							}
						</tbody>
					</table>
				</div>
			</div>
			{user.rttResults.length>0 &&
				<div
				className='rtt-test-result-history-all-time-average'
				>
					Your all-time average is {allTimeAverage/1000} seconds ({allTimeAverage} milliseconds)
				</div>
			}
			<div
				className='rtt-test-results-history-close-button-container'
			>
				<AquaButton
					aquaButtonClassName={'rtt-test-result-history-button'}
					aquaButtonId={'rtt-test-result-history-clear-button'}
					aquaButtonOnClick={handleRttResultsClear}
				>
					<AquaButtonText
						aquaButtonTextClassName={'rtt-test-result-history-clear-button-text rtt-test-result-history-button-text'}
						aquaButtonText={'Clear results'}
					/>
				</AquaButton>
				<AquaButton
					aquaButtonClassName={'rtt-test-result-history-button'}
					aquaButtonId={'rtt-test-result-history-sort-button'}
					aquaButtonOnClick={handleRttResultsSort}
				>
					<AquaButtonText
						aquaButtonTextClassName={'rtt-test-result-history-sort-button-text rtt-test-result-history-button-text'}
						aquaButtonText={'Sort results'}
					/>
				</AquaButton>
				<AquaButton
					aquaButtonClassName={'rtt-test-result-history-button rtt-test-results-history-close-button rtt-close-button'}
					aquaButtonOnClick={modalClose}
				>
					<AquaButtonText
						aquaButtonTextClassName={'rtt-test-results-history-close-button-text rtt-test-result-history-button-text'}
						aquaButtonText={'Close'}
					/>
				</AquaButton>
			</div>
		</Window>
	);
};
