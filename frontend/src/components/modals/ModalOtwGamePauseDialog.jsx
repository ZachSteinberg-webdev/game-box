import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';

import '../../css/modals/ModalOtwGamePauseDialog.css';

export default function ModalOtwGamePauseDialog(){
	const {
		windowModalOrdering,
		setWindowModalOrdering,
		appModalOrdering,
		setAppModalOrdering,
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses
	}=useContext(ModalContext);
	return(
		<Window
			windowClassName={`window-modal-container otw-game-pause-dialog ${modalShowClasses.modalOtwGamePauseDialogOpenShowClass}`}
			windowId={'ModalOtwGamePauseDialog'}
		>
			<Titlebar
				titlebarClassName={'modal-title-bar otw-game-pause-title-bar'}
			>
				<TitlebarTitle
					titleClassName={'otw-game-pause-title'}
					title={'Game Paused'}
				/>
			</Titlebar>
			<div
				className='otw-game-pause-instructions'
			>
				Click to resume or press the space bar
			</div>
			<AquaButton
				aquaButtonClassName={'otw-game-resume-button'}
			>
				<AquaButtonText
					aquaButtonTextClassName={'otw-game-resume-button-text'}
					aquaButtonText={'Resume!'}
				/>
			</AquaButton>
		</Window>
	);
};
