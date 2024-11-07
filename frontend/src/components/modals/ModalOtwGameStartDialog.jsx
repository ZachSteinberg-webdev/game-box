import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';

import offTheWallIcon from '../../assets/off-the-wall-icon-with-stroke.png';

import '../../css/modals/ModalOtwGameStartDialog.css';

export default function ModalOtwGameStartDialog(){
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
			windowClassName={`window-modal-container otw-game-start-dialog modal-container ${modalShowClasses.modalOtwGameStartDialogOpenShowClass}`}
			windowId={'ModalOtwGameStartDialog'}
		>
			<Titlebar
				titlebarClassName={'modal-title-bar otw-game-start-title-bar'}
			>
				<TitlebarTitle
					titleClassName={'otw-game-start-title'}
					title={'New Game'}
				/>
			</Titlebar>
			<img
				className='otw-off-the-wall-icon'
				src={offTheWallIcon}
			/>
			<div
				className='otw-game-start-instructions'
			>
				Click the start button or press the space bar to start.
			</div>
			<div
				className='otw-game-start-instructions'
			>
				The ball will move in a random direction at an increasingly shorter interval.
			</div>
			<div
				className='otw-game-start-instructions'
			>
				Use the arrow keys to prevent the ball from hitting the wall.
			</div>
			<div
				className='otw-game-start-instructions'
			>
				If the ball hits the wall, the game is over.
			</div>
			<div
				className='otw-game-start-instructions'
			>
				To pause, press the space bar at any point during the game.
			</div>
			<div
				className='otw-game-start-instructions'
			>
				Good luck!
			</div>
			<AquaButton
				aquaButtonClassName={'otw-game-start-button'}
			>
				<AquaButtonText
					aquaButtonTextClassName={'otw-game-start-button-text'}
					aquaButtonText={'Start!'}
				/>
			</AquaButton>
		</Window>
	);
};
