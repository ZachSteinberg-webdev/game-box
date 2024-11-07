import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';
import {UserContext} from '../../contexts/UserContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';
import ModalOtwResultHistoryResult from '../modalOtwResultHistoryComponents/ModalOtwResultHistoryResult.jsx';

import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';
import useHandleOtwResultsClear from '../../customHooks/formSubmissionHandlers/useHandleOtwResultsClear.jsx';
import useHandleOtwResultsSort from '../../customHooks/formSubmissionHandlers/useHandleOtwResultsSort.jsx';

import '../../css/modals/ModalOtwResultHistory.css';

export default function ModalOtwResultHistory(){
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
	const allTimeAverage=(user.otwResults.reduce((accumulator, currentValue)=>accumulator+currentValue, 0)/user.otwResults.length).toFixed(0);
	const modalClose=(e)=>{useModalClose(
		'ModalOtwResultHistory',
		windowModalOrdering.openWindowsModals,
		setWindowModalOrdering.setOpenWindowsModals,
		appModalOrdering.openOtwModals,
		setAppModalOrdering.setOpenOtwModals,
		setModals.setModalOtwResultHistoryOpen,
		setModalShowClasses.setModalOtwResultHistoryOpenShowClass
	)};
	const handleOtwResultsClear=(e)=>{useHandleOtwResultsClear(setUser)};
	const handleOtwResultsSort=(e)=>{
		const tableContainer=document.querySelector('.otw-results-history-table-container');
		useHandleOtwResultsSort(setUser);
		if(tableContainer.firstElementChild.firstElementChild.firstElementChild){
			const firstRow=tableContainer.firstElementChild.firstElementChild.firstElementChild;
			firstRow.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
		};
	};
	return(
		<Window
			windowClassName={`window-modal-container modal-container otw-modal-container otw-result-history-container ${modalShowClasses.modalOtwResultHistoryOpenShowClass}`}
			windowId={'ModalOtwResultHistory'}
		>
			<Titlebar
				titlebarClassName={'otw-modal-title-bar otw-result-history-title-bar drag-handle'}
			>
				<TitlebarTitle
					titleClassName={'otw-result-history-title'}
					title={'Off The Wall Score History'}
				/>
			</Titlebar>
			<div
				className='otw-results-history-container-in-click-prompt'
			>
				<div
					className='otw-results-history-table-header-container'
				>
					<table
						className='otw-results-history-table-header'
					>
						<thead
							className='otw-results-history-table-header'
						>
							<tr
								className='otw-results-history-table-header-row'
							>
								<th
									className='otw-results-history-table-header-click-number'
								>
									Game
								</th>
								<th
									className='otw-results-history-table-header-reaction-time'
								>
									Score
								</th>
							</tr>
						</thead>
					</table>
				</div>
				<div
					className='otw-results-history-table-container'
				>
					<table
						className='otw-results-history-table'
					>
						<tbody
							className='otw-results-history-table-body'
						>
							{user.otwResults.length>0?
								user.otwResults.map((score, index)=>{
									return(
										<ModalOtwResultHistoryResult
											key={`score-entry-${index}`}
											score={score}
											index={index}
										/>
									);
								}):
								<tr
									className='otw-table-row'
									id={`otw-result-history-table-row`}
								>
									<td
										className='otw-results-history-table-row-number'
									>
										N/A
									</td>
									<td
										className='otw-results-history-table-row-reaction-time'
									>
										No scores to display yet. Play a round!
									</td>
								</tr>
							}
						</tbody>
					</table>
				</div>
			</div>
			{user.otwResults.length>0 &&
				<div
				className='otw-result-history-all-time-average'
				>
					Your all-time average is {allTimeAverage} moves
				</div>
			}
			<div
				className='otw-results-history-close-button-container'
			>
				<AquaButton
					aquaButtonClassName={'otw-result-history-button'}
					aquaButtonId={'otw-result-history-clear-button'}
					aquaButtonOnClick={handleOtwResultsClear}
				>
					<AquaButtonText
						aquaButtonTextClassName={'otw-result-history-clear-button-text otw-result-history-button-text'}
						aquaButtonText={'Clear scores'}
					/>
				</AquaButton>
				<AquaButton
					aquaButtonClassName={'otw-result-history-button'}
					aquaButtonId={'otw-result-history-sort-button'}
					aquaButtonOnClick={handleOtwResultsSort}
				>
					<AquaButtonText
						aquaButtonTextClassName={'otw-result-history-sort-button-text otw-result-history-button-text'}
						aquaButtonText={'Sort scores'}
					/>
				</AquaButton>
				<AquaButton
					aquaButtonClassName={'otw-result-history-button otw-results-history-close-button otw-close-button'}
					aquaButtonOnClick={modalClose}
				>
					<AquaButtonText
						aquaButtonTextClassName={'otw-results-history-close-button-text otw-result-history-button-text'}
						aquaButtonText={'Close'}
					/>
				</AquaButton>
			</div>
		</Window>
	);
};
