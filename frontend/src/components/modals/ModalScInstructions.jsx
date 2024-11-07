import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';

import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';

import '../../css/modals/ModalScInstructions.css';

export default function ModalScInstructions(){
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
		'ModalScInstructions',
		windowModalOrdering.openWindowsModals,
		setWindowModalOrdering.setOpenWindowsModals,
		appModalOrdering.openScModals,
		setAppModalOrdering.setOpenScModals,
		setModals.setModalScInstructionsOpen,
		setModalShowClasses.setModalScInstructionsOpenShowClass
	)};
	return(
		<Window
			windowClassName={`window-modal-container modal-container sc-modal-container sc-test-instructions-container ${modalShowClasses.modalScInstructionsOpenShowClass}`}
			windowId={'ModalScInstructions'}
		>
			<Titlebar
				titlebarClassName={'sc-modal-title-bar sc-test-instructions-title-bar drag-handle'}
			>
				<TitlebarTitle
					titleClassName={'sc-test-instructions-title'}
					title={'Instructions'}
				/>
			</Titlebar>
			<div
				className='sc-test-instructions-wrapper'
			>
				<p
					className='sc-test-instructions'
				>
					To start the test, click the button at the bottom. Continue clicking as fast as your can for ten seconds. The button will disappear after ten second has elapsed, at which point the round is finished. When the button reappears, the test can be performed again following the same process. The number of clicks made within each round is displayed above the button.
				</p>
				<p
					className='sc-test-instructions'
				>
					Your clicking scores are automatically saved and can be viewed, sorted and deleted by using the Score History viewer, available from the menubar at {'"Speed Clicker > Score History..."'}.
				</p>
				<p
					className='sc-test-instructions'
				>
					You may click with a mouse if you prefer, however the button will be focused as soon as it appears, so you may also use your space bar as the trigger. Happy clicking!
				</p>
			</div>
			<div
				className='sc-test-instructions-close-button-container'
			>
				<AquaButton
					aquaButtonClassName={'sc-test-instructions-close-button sc-close-button'}
					aquaButtonOnClick={modalClose}
				>
					<AquaButtonText
						aquaButtonTextClassName={'sc-test-instructions-close-button-text sc-close-button-text'}
						aquaButtonText={'Close'}
					/>
				</AquaButton>
			</div>
		</Window>
	);
};
