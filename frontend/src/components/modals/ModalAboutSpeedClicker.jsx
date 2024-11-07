import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';

import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';

import '../../css/modals/ModalAboutSpeedClicker.css';

export default function ModalAboutSpeedClicker(){
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
			'ModalScAbout',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openScModals,
			setAppModalOrdering.setOpenScModals,
			setModals.setModalAboutSpeedClickerOpen,
			setModalShowClasses.setModalAboutSpeedClickerOpenShowClass
		)};
	return(
		<Window
			windowClassName={`window-modal-container modal-container about-speed-clicker-container ${modalShowClasses.modalAboutSpeedClickerOpenShowClass}`}
			windowId={'ModalScAbout'}
		>
			<Titlebar
				titlebarClassName={'modal-title-bar about-title-bar sc-about-title-bar drag-handle'}
			>
				<TitlebarTitle
					titleClassName={'sc-about-title'}
					title={'About Speed Clicker'}
				/>
			</Titlebar>
			<div
				className='sc-about-message-and-test-icon-container'
			>
				<div
					className='sc-test-icon-in-about-modal'
				>
				</div>
				<div
					className='sc-about-message-container'
				>
					<p
						className='sc-about-message'
					>
						Speed Clicker is a game that tests clicking speed using a simple single-button interface.
					</p>
					<p
						className='sc-about-message'
					>
						Version 1.0
					</p>
					<p
						className='sc-about-message'
					>
						Created by Zach Steinberg
					</p>
				</div>
			</div>
			<div
				className='sc-about-close-button-container'
			>
				<AquaButton
					aquaButtonClassName={'sc-about-close-button about-close-button'}
					aquaButtonOnClick={modalClose}
				>
					<AquaButtonText
						aquaButtonTextClassName={'sc-about-close-button-text about-close-button-text'}
						aquaButtonText={'Close'}
					/>
				</AquaButton>
			</div>
		</Window>
	);
};
