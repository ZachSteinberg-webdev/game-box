import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';

import useWindowOpen from '../../customHooks/helperFunctions/useWindowOpen.jsx';
import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';

import '../../css/modals/ModalRttRestartConfirmation.css';

export default function ModalRttRestartConfirmation(){
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

	const handleRttRestart=(e)=>{
		setModalShowClasses.setModalRttRestartConfirmationOpenShowClass('');
		setTimeout(()=>{
			setModals.setModalRttRestartConfirmationOpen(false);
		},500);
		setModals.setModalRttContainerOpen(true);
		setModalShowClasses.setModalRttContainerOpenShowClass('rtt-restart-confirmation-container-in-use');
	};
	const modalClose=(e)=>{useModalClose(
		'ModalRttRestart',
		windowModalOrdering.openWindowsModals,
		setWindowModalOrdering.setOpenWindowsModals,
		appModalOrdering.openRttModals,
		setAppModalOrdering.setOpenRttModals,
		setModals.setModalRttRestartConfirmationOpen,
		setModalShowClasses.setModalRttRestartConfirmationOpenShowClass
	)};
	return(
		<Window
			windowClassName={`window-modal-container modal-container rtt-restart-confirmation-container ${modalShowClasses.modalRttRestartConfirmationOpenShowClass}`}
			windowId={'ModalRttRestart'}
		>
			<Titlebar
				titlebarClassName={'rtt-modal-title-bar rtt-restart-confirmation-title-bar drag-handle'}
			>
				<TitlebarTitle
					titleClassName={'rtt-restart-confirmation-title'}
					title={'Confirm restart'}
				/>
			</Titlebar>
			<div
				className='rtt-restart-confirmation-icon-and-message-container'
			>
				<div
					className='rtt-restart-confirmation-icon'
				>
				</div>
				<div
					className='rtt-restart-confirmation-message-container'
				>
					<p
						className='rtt-restart-confirmation-message'
					>
						Are you sure you want to restart the test? You will lose your current list of results.
					</p>
					<p
						className='rtt-restart-confirmation-message'
					>
						This cannot be undone.
					</p>
				</div>
			</div>
			<div
				className='rtt-restart-confirmation-button-container'
			>
				<AquaButton
					aquaButtonClassName={'rtt-accept-button rtt-restart-confirmation-button rtt-confirm-restart'}
				>
					<AquaButtonText
						aquaButtonTextClassName={'rtt-confirm-restart-text rtt-restart-confirmation-button-text'}
						aquaButtonText={'Yes'}
					/>
				</AquaButton>
				<button
					className='rtt-accept-button rtt-restart-confirmation-button rtt-confirm-restart'

				>
					Yes
				</button>
				<AquaButton
					aquaButtonClassName={'rtt-close-button rtt-restart-confirmation-button rtt-cancel-restart'}
					aquaButtonOnClick={modalClose}
				>
					<AquaButtonText
						aquaButtonTextClassName={'rtt-cancel-restart-text rtt-restart-confirmation-button-text'}
						aquaButtonText={'No'}
					/>
				</AquaButton>
			</div>
		</Window>
	);
};
