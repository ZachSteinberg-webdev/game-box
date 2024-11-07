import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';

import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';

import '../../css/modals/ModalOtwInstructions.css';

export default function ModalOtwInstructions(){
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
		'ModalOtwInstructions',
		windowModalOrdering.openWindowsModals,
		setWindowModalOrdering.setOpenWindowsModals,
		appModalOrdering.openOtwModals,
		setAppModalOrdering.setOpenOtwModals,
		setModals.setModalOtwInstructionsOpen,
		setModalShowClasses.setModalOtwInstructionsOpenShowClass
	)};
	return(
		<Window
			windowClassName={`window-modal-container modal-container otw-modal-container otw-instructions-container ${modalShowClasses.modalOtwInstructionsOpenShowClass}`}
			windowId={'ModalOtwInstructions'}
		>
			<Titlebar
				titlebarClassName={'otw-modal-title-bar otw-instructions-title-bar drag-handle'}
			>
				<TitlebarTitle
					titleClassName={'otw-instructions-title'}
					title={'Instructions'}
				/>
			</Titlebar>
			<div
				className='otw-instructions-wrapper'
			>
				<p
					className='otw-instructions'
				>
					Click the start button or press the space bar to start the game. The ball will move in a randomly-selected direction at an increasingly shorter interval. To begin, the ball will move after a delay of 750 milliseconds. The delay between movements will decrease by 10 milliseconds with each subsequent move, until a minimum delay of 100 milliseconds is reached, at which point the delay between movements will remain constant at 100 milliseconds.
				</p>
				<p
					className='otw-instructions'
				>
					Your game scores are automatically saved and can be viewed, sorted and deleted by using the Score History viewer, available from the menubar at {'"Off The Wall > Score History..."'}.
				</p>
				<p
					className='otw-instructions'
				>
					Use the arrow keys to control the ball and prevent it from hitting any of the four walls. To pause the game, press the space bar at any point during the game. If the ball hits a wall, the game is over. Good luck!
				</p>
			</div>
			<div
				className='otw-instructions-close-button-container'
			>
				<AquaButton
					aquaButtonClassName={'otw-instructions-close-button otw-close-button'}
					aquaButtonOnClick={modalClose}
				>
					<AquaButtonText
						aquaButtonTextClassName={'otw-instructions-close-button-text otw-close-button-text'}
						aquaButtonText={'Close'}
					/>
				</AquaButton>
			</div>
		</Window>
	);
};
