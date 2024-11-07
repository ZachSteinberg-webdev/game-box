import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';

import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';

import '../../css/modals/ModalAboutOffTheWall.css';

export default function ModalAboutOffTheWall(){
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
			'ModalOtwAbout',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openOtwModals,
			setAppModalOrdering.setOpenOtwModals,
			setModals.setModalAboutOffTheWallOpen,
			setModalShowClasses.setModalAboutOffTheWallOpenShowClass
		)};
	return(
		<Window
			windowClassName={`window-modal-container modal-container about-off-the-wall-container ${modalShowClasses.modalAboutOffTheWallOpenShowClass}`}
			windowId={'ModalOtwAbout'}
		>
			<Titlebar
				titlebarClassName={'modal-title-bar about-title-bar otw-about-title-bar drag-handle'}
			>
				<TitlebarTitle
					titleClassName={'otw-about-title'}
					title={'About Off The Wall'}
				/>
			</Titlebar>
			<div
				className='otw-about-message-and-test-icon-container'
			>
				<div
					className='otw-test-icon-in-about-modal'
				>
				</div>
				<div
					className='otw-about-message-container'
				>
					<p
						className='otw-about-message'
					>
						Off The Wall is a game that tests hand-eye coordination and reflex speed.
					</p>
					<p
						className='otw-about-message'
					>
						Version 1.0
					</p>
					<p
						className='otw-about-message'
					>
						Created by Zach Steinberg
					</p>
				</div>
			</div>
			<div
				className='otw-about-close-button-container'
			>
				<AquaButton
					aquaButtonClassName={'otw-about-close-button about-close-button'}
					aquaButtonOnClick={modalClose}
				>
					<AquaButtonText
						aquaButtonTextClassName={'otw-about-close-button-text about-close-button-text'}
						aquaButtonText={'Close'}
					/>
				</AquaButton>
			</div>
		</Window>
	);
};
