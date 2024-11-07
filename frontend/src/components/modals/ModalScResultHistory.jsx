import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';
import {UserContext} from '../../contexts/UserContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';
import ModalScResultHistoryResult from '../modalScResultHistoryComponents/ModalScResultHistoryResult.jsx';

import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';
import useHandleScResultsClear from '../../customHooks/formSubmissionHandlers/useHandleScResultsClear.jsx';
import useHandleScResultsSort from '../../customHooks/formSubmissionHandlers/useHandleScResultsSort.jsx';

import '../../css/modals/ModalScResultHistory.css';

export default function ModalScResultHistory(){
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
	const allTimeAverage=(user.scResults.reduce((accumulator, currentValue)=>accumulator+currentValue, 0)/user.scResults.length).toFixed(0);
	const modalClose=(e)=>{useModalClose(
		'ModalScResultHistory',
		windowModalOrdering.openWindowsModals,
		setWindowModalOrdering.setOpenWindowsModals,
		appModalOrdering.openScModals,
		setAppModalOrdering.setOpenScModals,
		setModals.setModalScResultHistoryOpen,
		setModalShowClasses.setModalScResultHistoryOpenShowClass
	)};
	const handleScResultsClear=(e)=>{useHandleScResultsClear(setUser)};
	const handleScResultsSort=(e)=>{
		const tableContainer=document.querySelector('.sc-test-results-history-table-container');
		useHandleScResultsSort(setUser);
		if(tableContainer.firstElementChild.firstElementChild.firstElementChild){
			const firstRow=tableContainer.firstElementChild.firstElementChild.firstElementChild;
			firstRow.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
		};
	};
	return(
		<Window
			windowClassName={`window-modal-container modal-container sc-modal-container sc-test-result-history-container ${modalShowClasses.modalScResultHistoryOpenShowClass}`}
			windowId={'ModalScResultHistory'}
		>
			<Titlebar
				titlebarClassName={'sc-modal-title-bar sc-test-result-history-title-bar drag-handle'}
			>
				<TitlebarTitle
					titleClassName={'sc-test-result-history-title'}
					title={'Speed Clicker Result History'}
				/>
			</Titlebar>
			<div
				className='sc-test-results-history-container-in-click-prompt'
			>
				<div
					className='sc-test-results-history-table-header-container'
				>
					<table
						className='sc-test-results-history-table-header'
					>
						<thead
							className='sc-test-results-history-table-header'
						>
							<tr
								className='sc-test-results-history-table-header-row'
							>
								<th
									className='sc-test-results-history-table-header-click-number'
								>
									Round
								</th>
								<th
									className='sc-test-results-history-table-header-reaction-time'
								>
									Number of Clicks
								</th>
							</tr>
						</thead>
					</table>
				</div>
				<div
					className='sc-test-results-history-table-container'
				>
					<table
						className='sc-test-results-history-table'
					>
						<tbody
							className='sc-test-results-history-table-body'
						>
							{user.scResults.length>0?
								user.scResults.map((result, index)=>{
									return(
										<ModalScResultHistoryResult
											key={`result-entry-${index}`}
											result={result}
											index={index}
										/>
									);
								}):
								<tr
									className='sc-test-table-row'
									id={`sc-test-result-history-table-row`}
								>
									<td
										className='sc-test-table-row-number'
									>
										N/A
									</td>
									<td
										className='sc-test-table-row-reaction-time'
									>
										No scores to display yet. Get clicking!
									</td>
								</tr>
							}
						</tbody>
					</table>
				</div>
			</div>
			{user.scResults.length>0 &&
				<div
				className='sc-test-result-history-all-time-average'
				>
					Your all-time average is {allTimeAverage} clicks
				</div>
			}
			<div
				className='sc-test-results-history-close-button-container'
			>
				<AquaButton
					aquaButtonClassName={'sc-test-result-history-button'}
					aquaButtonId={'sc-test-result-history-clear-button'}
					aquaButtonOnClick={handleScResultsClear}
				>
					<AquaButtonText
						aquaButtonTextClassName={'sc-test-result-history-clear-button-text sc-test-result-history-button-text'}
						aquaButtonText={'Clear scores'}
					/>
				</AquaButton>
				<AquaButton
					aquaButtonClassName={'sc-test-result-history-button'}
					aquaButtonId={'sc-test-result-history-sort-button'}
					aquaButtonOnClick={handleScResultsSort}
				>
					<AquaButtonText
						aquaButtonTextClassName={'sc-test-result-history-sort-button-text sc-test-result-history-button-text'}
						aquaButtonText={'Sort scores'}
					/>
				</AquaButton>
				<AquaButton
					aquaButtonClassName={'sc-test-result-history-button sc-test-results-history-close-button sc-close-button'}
					aquaButtonOnClick={modalClose}
				>
					<AquaButtonText
						aquaButtonTextClassName={'sc-test-results-history-close-button-text sc-test-result-history-button-text'}
						aquaButtonText={'Close'}
					/>
				</AquaButton>
			</div>
		</Window>
	);
};
