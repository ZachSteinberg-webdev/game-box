import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';

import '../../css/modals/ModalOtwGameEndDialog.css';

export default function ModalOtwGameEndDialog(){
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
			windowClassName={`window-modal-container otw-game-end-dialog ${modalShowClasses.modalOtwGameEndDialogOpenShowClass}`}
			windowId={'ModalOtwGameEndDialog'}
		>
			<Titlebar
				titlebarClassName={'modal-title-bar otw-game-end-title-bar'}
			>
				<TitlebarTitle
					titleClassName={'otw-game-end-title'}
					title={'Game Over'}
				/>
			</Titlebar>
			<div
				className='otw-game-end-instructions'
			>
				Congratulations! You made it through <span className='otw-move-total'></span> moves!
			</div>
			<div
				className='otw-game-end-instructions'
			>
				You survived until a movement interval of <span className='otw-final-move-interval'></span> milliseconds.
			</div>
			<div
				className='otw-game-end-instructions'
				id='otw-game-end-lowest-interval-congratulations'
			>
				Wow! That's the lowest interval possible!
			</div>
			<div
				className='otw-game-end-instructions'
			>
				You've played <span className='otw-games-played-total'></span> during this session.
			</div>
			<AquaButton
				aquaButtonClassName={'otw-game-play-again-button'}
			>
				<AquaButtonText
					aquaButtonTextClassName={'otw-game-play-again-button-text'}
					aquaButtonText={'Play again!'}
				/>
			</AquaButton>
		</Window>
	);
};
