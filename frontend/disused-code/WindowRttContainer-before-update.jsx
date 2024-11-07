import React, {useState, useEffect, useContext, useRef} from 'react';
// import Draggable, {DraggableCore} from 'react-draggable';
// console.log(Draggable);
import {useWindowSize} from '@react-hook/window-size';

import {ModalContext} from '../../contexts/ModalContext.jsx';
import {UserContext} from '../../contexts/UserContext.jsx';
import {RttContext} from '../../contexts/RttContext.jsx';

import ModalAboutReactionTimeTest from '../modals/ModalAboutReactionTimeTest.jsx';
import ModalRttRestartConfirmation from '../modals/ModalRttRestartConfirmation.jsx';
import ModalRttInstructions from '../modals/ModalRttInstructions.jsx';
import ModalRttAnticheat from '../modals/ModalRttAnticheat.jsx';
import ModalRttResultHistory from '../modals/ModalRttResultHistory.jsx';
import ResizeIcon from '../Icons/ResizeIcon.jsx';

import useModalOpen from '../../customHooks/helperFunctions/useModalOpen.jsx';
import useWindowClose from '../../customHooks/helperFunctions/useWindowClose.jsx';
import useWindowMinimize from '../../customHooks/helperFunctions/useWindowMinimize.jsx';
import useWindowMaximize from '../../customHooks/helperFunctions/useWindowMaximize.jsx';
// import useHandleRttSetup from '../customHooks/helperFunctions/useHandleRttSetup.jsx';
// import useHandleRttWindowClick from '../../customHooks/eventListeners/useHandleRttWindowClick.jsx';
import useHandleRttKeydown from '../../customHooks/eventListeners/useHandleRttKeydown.jsx';
import useHandleRttSpaceOrEnterPress from '../../customHooks/eventListeners/useHandleRttSpaceOrEnterPress.jsx';
import useHandleRttTestButtonFormClick from '../../customHooks/eventListeners/useHandleRttTestButtonFormClick.jsx';
import useHandleRttTestButtonTransitionEnd from '../../customHooks/eventListeners/useHandleRttTestButtonTransitionEnd.jsx';
import useHandleRttTestButtonClick from '../../customHooks/eventListeners/useHandleRttTestButtonClick.jsx';
import useMakeInert from '../../customHooks/helperFunctions/useMakeInert.jsx';
// import useHandleWindowMouseDown from '../../customHooks/eventListeners/useHandleWindowMouseDown.jsx';
// import useHandleDragHandleMouseDown from '../../customHooks/eventListeners/useHandleDragHandleMouseDown.jsx';

import '../../css/windows/WindowRttContainer.css';

export default function WindowRttContainer(){
	// const nodeRef=useRef(null);
	const [width, height]=useWindowSize();
	// const {resetState}=useDraggable();
	// console.log('height', height);
	// const [testButtonClickCounter, setTestButtonClickCounter]=useState(0);
	// const [testResultsCounter, setTestResultsCounter]=useState(0);
	// const [showTime, setShowTime]=useState(0);
	// const [previousShowTime, setPreviousShowTime]=useState(0);
	// const [clickTime, setClickTime]=useState(0);
	// const [previousClickTime, setPreviousClickTime]=useState(0);
	// const [testButtonFormClickTime, setTestButtonFormClickTime]=useState(0);
	// const [latestSpaceOrEnterPress, setLatestSpaceOrEnterPress]=useState(0);
	// const [anticheatAlertTriggeredYet, setAnticheatAlertTriggeredYet]=useState(false);
	// const [anticheatTriggerCount, setAnticheatTriggerCount]=useState(0);
	// const [newRunningAverage, setNewRunningAverage]=useState(0);
	// const [resultsAverage, setResultsAverage]=useState(0);
	// const [resultsSum, setResultsSum]=useState(0);
	// const [reactionTimeResults, setReactionTimeResults]=useState([]);
	// const [dragPosition, setDragPosition]=useState(null);
	// const [dragPositionX, setDragPositionX]=useState(null);
	// const [dragPositionY, setDragPositionY]=useState(null);
	// const [draggableKey, setDraggableKey]=useState(0);
	const {
		appModalOrdering,
		setAppModalOrdering,
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses
	}=useContext(ModalContext);
	const {user, setUser}=useContext(UserContext);
	const {rttValues, setRttValues}=useContext(RttContext);
	const modalOpen=(e)=>{useModalOpen(
		setModals.setModalRttInstructionsOpen,
		setModalShowClasses.setModalRttInstructionsOpenShowClass,
		'rtt-test-instructions-container-in-use'
	)};
	const windowClose=(e)=>{useWindowClose('.rtt-test-container')};
	const windowMinimize=(e)=>{useWindowMinimize('.rtt-test-container')};
	const windowMaximize=(e)=>{useWindowMaximize('.rtt-test-container')};
	// const handleDragHandleMouseDown=(e)=>{useHandleDragHandleMouseDown(e)};
	// const handleWindowMouseDown=(e)=>{useHandleWindowMouseDown(e)};
	const handleRttSpaceOrEnterPress=(e)=>{useHandleRttSpaceOrEnterPress(e, setRttValues.setLatestSpaceOrEnterPress)};
	const handleRttTestButtonFormClick=(e)=>{useHandleRttTestButtonFormClick(
		e,
		setRttValues.setTestButtonFormClickTime
	)};
	const handleRttTestButtonTransitionEnd=(e)=>{useHandleRttTestButtonTransitionEnd(
		e,
		setRttValues.setShowTime
	)};
	const handleRttTestButtonClick=(e)=>{useHandleRttTestButtonClick(
		e,
		setUser,
		rttValues.clickTime,
		setRttValues.setClickTime,
		// reactionTime,
		// setReactionTime,
		rttValues.showTime,
		rttValues.testButtonFormClickTime,
		rttValues.latestSpaceOrEnterPress,
		rttValues.testButtonClickCounter,
		setRttValues.setTestButtonClickCounter,
		rttValues.testResultsCounter,
		setRttValues.setTestResultsCounter,
		rttValues.reactionTimeResults,
		setRttValues.setReactionTimeResults,
		rttValues.resultsSum,
		rttValues.resultsAverage,
		rttValues.newRunningAverage,
		setRttValues.setNewRunningAverage,
		rttValues.anticheatAlertTriggeredYet,
		setRttValues.setAnticheatAlertTriggeredYet,
		setModals,
		setModalShowClasses,
		appModalOrdering,
		setAppModalOrdering
	)};
	useEffect(()=>{
		useHandleRttKeydown(handleRttSpaceOrEnterPress);
		// useHandleRttWindowClick();
	},[]);
	return(
		<div
			className={`window-container rtt-test-container ${modalShowClasses.modalRttContainerOpenShowClass}`}
			id='WindowRttContainer'
		>
			<div
				className="rtt-modal-title-bar rtt-test-title-container drag-handle"
				/*onMouseDown={handleWindowMouseDown}*/
				/*onMouseDown={handleDragHandleMouseDown}*/
			>
				<div
					className="rtt-test-window-lefthand-buttons-container"
				>
					<div
						className="rtt-test-window-button rtt-test-window-close-button"
						id="rtt-test-window-close-button"
						onClick={windowClose}
					>
					</div>
					<div
						className="rtt-test-window-button rtt-test-window-minimize-button"
						id="rtt-test-window-minimize-button"
						onClick={windowMinimize}
					>
					</div>
					<div
						className="rtt-test-window-button rtt-test-window-maximize-button"
						id="rtt-test-window-maximize-button"
						onClick={windowMaximize}
					>
					</div>
				</div>
				<p
					className="rtt-test-title"
				>
					Reaction Time Test
				</p>
				<div
					className="rtt-test-window-righthand-button-container"
				>
					<div
						className="rtt-test-window-righthand-button"
					>
					</div>
				</div>
			</div>
			<div
				className='rtt-modal-resize-handle resize-handle'
			>
				<ResizeIcon/>
			</div>
			<div
				className="rtt-test-instructions-button-container"
				onClick={modalOpen}
			>
				<span
					className="rtt-test-instructions-placeholder"
				>
					Click for instructions
				</span>
			</div>
			<div
				className="rtt-test-results-container-in-click-prompt"
			>
				<div
					className="rtt-test-table-header-container"
				>
					<table
						className="rtt-test-table-header"
					>
						<thead
							className="rtt-test-table-header"
						>
							<tr
								className="rtt-test-table-header-row"
							>
								<th
									className="rtt-test-table-header-click-number"
								>
									Click
								</th>
								<th
									className="rtt-test-table-header-reaction-time"
								>
									Reaction time
								</th>
								<th
									className="rtt-test-table-header-running-average"
								>
									Running average
								</th>
							</tr>
						</thead>
					</table>
				</div>
				<div
					className="rtt-test-table-container"
				>
					<table
						className="rtt-test-table"
					>
						<tbody
							className="rtt-test-table-body"
						>
						</tbody>
					</table>
				</div>
			</div>
			<div
				className="rtt-test-button-container"
			>
				<form
					action="#"
					className="rtt-test-button-form"
					onClick={handleRttTestButtonFormClick}
				>
					<div
						className="rtt-test-button-waiting-message-container"
					>
						<p
							className="rtt-test-button-waiting-message"
						>
							Get ready and...
						</p>
					</div>
					<button
						className="rtt-test-button"
						type="button"
						name="testButton"
						tabIndex="1"
						onClick={handleRttTestButtonClick}
						onTransitionEnd={handleRttTestButtonTransitionEnd}
						autoFocus
					>
						<p
							className="rtt-test-button-text"
						>
							Click here to get started!
						</p>
					</button>
				</form>
			</div>
			{modals.modalAboutReactionTimeTestOpen && modals.modalRttContainerOpen && <ModalAboutReactionTimeTest/>}
			{modals.modalRttRestartConfirmationOpen && modals.modalRttContainerOpen &&  <ModalRttRestartConfirmation/>}
			{modals.modalRttInstructionsOpen && modals.modalRttContainerOpen && <ModalRttInstructions/>}
			{modals.modalRttAnticheatOpen && modals.modalRttContainerOpen && <ModalRttAnticheat/>}
			{modals.modalRttResultHistoryOpen && modals.modalRttContainerOpen && <ModalRttResultHistory/>}
		</div>
	);
};
