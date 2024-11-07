import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';

import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';

import '../../css/modals/ModalRttInstructions.css';

export default function ModalRttInstructions(){
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
	const modalClose=(e)=>{useModalClose(
		'ModalRttInstructions',
		windowModalOrdering.openWindowsModals,
		setWindowModalOrdering.setOpenWindowsModals,
		appModalOrdering.openRttModals,
		setAppModalOrdering.setOpenRttModals,
		setModals.setModalRttInstructionsOpen,
		setModalShowClasses.setModalRttInstructionsOpenShowClass
	)};
	return(
		<Window
			windowClassName={`window-modal-container modal-container rtt-modal-container rtt-test-instructions-container ${modalShowClasses.modalRttInstructionsOpenShowClass}`}
			windowId={'ModalRttInstructions'}
		>
			<Titlebar
				titlebarClassName={'rtt-modal-title-bar rtt-test-instructions-title-bar drag-handle'}
			>
				<TitlebarTitle
					titleClassName={'rtt-test-instructions-title'}
					title={'Instructions'}
				/>
			</Titlebar>
			<div
				className='rtt-test-instructions-wrapper'
			>
				<p
					className='rtt-test-instructions'
				>
					Click the button at the bottom to get started. The button will disappear and reappear at a random interval between two and six seconds. When the button reappears, click it as quickly as you can. The time difference between when the button appears and when you click it is your reaction time. Your reaction times are displayed above the button.
				</p>
				<p
					className='rtt-test-instructions'
				>
					Your reaction times are automatically saved and can be viewed, sorted and deleted by using the Result History viewer, available from the menubar at {'"Reaction Time Test > Result History..."'}.
				</p>
				<p
					className='rtt-test-instructions'
				>
					You may click with a mouse if you prefer, however the button will be focused as soon as it appears, so you may also use your space bar as the trigger. No pressure.
				</p>
			</div>
			<div
				className='rtt-test-instructions-close-button-container'
			>
				<AquaButton
					aquaButtonClassName={'rtt-test-instructions-close-button rtt-close-button'}
					aquaButtonOnClick={modalClose}
				>
					<AquaButtonText
						aquaButtonTextClassName={'rtt-test-instructions-close-button-text rtt-close-button-text'}
						aquaButtonText={'Close'}
					/>
				</AquaButton>
			</div>
		</Window>
	);
};
