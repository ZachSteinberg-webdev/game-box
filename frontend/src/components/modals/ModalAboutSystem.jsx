import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';

import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';
import useAppQuit from '../../customHooks/helperFunctions/useAppQuit.jsx';

import pearIconColor from '../../assets/pear-icon-with-bite-v2-in-color-g.png';

import '../../css/modals/ModalAboutSystem.css';

export default function ModalAboutSystem(){
	const {
		windowModalOrdering,
		setWindowModalOrdering,
		appOrdering,
		setAppOrdering,
		setMenubars,
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses
	}=useContext(ModalContext);
	const appQuit=(e)=>{useAppQuit(
		'ModalSystemAbout',
		windowModalOrdering.openWindowsModals,
		setWindowModalOrdering.setOpenWindowsModals,
		appOrdering.openApps,
		setAppOrdering.setOpenApps,
		'NoMenubar',
		setModals.setModalAboutSystemOpen,
		setModalShowClasses.setModalAboutSystemOpenShowClass
	)};
	return(
		<Window
			windowClassName={`window-modal-container window-container about-system-container ${modalShowClasses.modalAboutSystemOpenShowClass}`}
			windowId={'ModalSystemAbout'}
		>
			<Titlebar
				titlebarClassName={'modal-title-bar about-system-title-bar drag-handle'}
			>
				<TitlebarTitle
					titleClassName={'about-system-title'}
					title={'About This Aqua-style Mock-Up of early Mac OS X'}
				/>
			</Titlebar>
			<div
				className='about-system-message-and-test-icon-container'
			>
				<img
					className='pear-icon-in-about-system-modal'
					src={pearIconColor}
					alt=''
				/>
				<div
					className='about-system-message-container'
				>
					<p
						className='about-system-message'
					>
						This "operating system" is intended to be a <i>very rough and limited</i> mock-up of Mac OS X, reminiscent of 10.1 (Cheetah) to 10.4 (Tiger), following the Aqua design asthetic, my personal all-time favorite operating system visual design language.
					</p>
					<p
						className='about-system-message'
					>
						At the outset of this project, I was initially only building the Reaction Time Test app and was only designing the main test button (the giant "Click here..." button) to have an Aqua-inspired appearance, however I then realized I needed to come up with a design for the rest of the application. So, why not keep the theme going?
					</p>
					<p
						className='about-system-message'
					>
						Once I had designed the Reaction Time Test app to fully look like an Aqua-style OS X window, it seemed only fitting to put a static, non-interactive menubar above it. Once I had done that, I figured I might as well make it functional. And, of course, I might as well build out window dragging functionality. And, rightfully so, window resizing functionality. And how could I forget window-layering functionality! And then functional traffic light buttons for the title bars. And desktop icons. Who could forget those? And then surely this all needs a dock! How else could a user re-open a closed window? The horror!
					</p>
					<p
						className='about-system-message'
					>
						At this point, I felt silly just leaving this all as-is with only one "application", so I built two more "mini-applications" that had been kicking around in my head, Speed Clicker, which is very derivative of Reaction Time Test, and Off The Wall, a very simple ball game. To top it all off, I figured a System Preferences application was needed. Afterall, I had to give a user some way to update their username and/or password. And I couldn't leave the System Preferences application with only one settings pane, so I built a pane for time settings and another for desktop wallpaper settings.
					</p>
					<p
						className='about-system-message'
					>
						I had so much fun building out the various aspects of the old Aqua-style OS X. The hardest part of making this mock-up was deciding where to stop! It became somewhat of a runaway train. I finally had to pick a cut-off point and stick to it. It took a lot of self-control to stop myself from building an application switcher and window cycling functionality!
					</p>
					<p
						className='about-system-message'
					>
						I hope this mock-up of old-style OS X puts a smile on your face as it does mine. And if you're from Apple's legal department, please don't sue me! :)
					</p>
					<hr className='about-system-hr'/>
					<p
						className='about-system-credits'
					>
						Some of the visual elements used in making this website are from third-party sources. Some are used directly from their source, visually unaltered. Others are composed of two or more other third-party works, sometimes altered digitally as part of a final composition. All alteration and assembly of multiple elements into a final composition are performed using <a href='https://www.gimp.org/' target='_blank' rel='noreferrer'>GIMP (GNU Image Manipuation Program)</a>, a free and open-source image editor.
					</p>
					<p
						className='about-system-credits'
					>
						The credits for all desktop background wallpapers are displayed in the bottom-righthand corner of each wallpaper when it is selected as the current wallpaper in the System Preferences app. All other credits are as follows (in alphabetical order):
					</p>
					<p
						className='about-system-credits'
					>
						Account icon: <a href='https://www.iconfinder.com/icons/5402435/account_profile_user_avatar_man_person_icon' target='_blank' rel='noreferrer'>amoghdesign</a>, Background icon: <a href='https://www.iconfinder.com/icons/9055518/bxs_image_icon' target='_blank' rel='noreferrer'>Box Icons</a>, Bluetooth icon: <a href='https://www.iconfinder.com/icons/9024290/bluetooth_light_icon' target='_blank' rel='noreferrer'>Phosphor Icons</a>, Home icon: <a href='https://www.iconfinder.com/icons/3209296/address_home_homepage_house_resient_icon' target='_blank' rel='noreferrer'>Becris</a>, Info icon: <a href='https://icons8.com/icon/80585/info' target='_blank' rel='noreferrer'>Icons8</a>, Magnifying Glass icon: <a href='https://www.iconfinder.com/icons/9025828/magnifying_glass_icon' target='_blank' rel='noreferrer'>Phosphor Icons</a>, Off The Wall background: <a href='https://architextures.org/textures/1125' target='_blank' rel='noreferrer'>Architextures</a>, Off The Wall icon (ball): <a href='https://www.flaticon.com/free-icon/ball_13777688' target='_blank' rel='noreferrer'>berkahicon</a>, Off The Wall icon (wall): <a href='https://www.flaticon.com/free-icon/brick-wall_9920949' target='_blank' rel='noreferrer'>Freepik</a>, Pear Black icon: <a href='https://www.flaticon.com/free-icon/pear_272166' target='_blank' rel='noreferrer'>Freepik</a>, Pear Rainbow icon (color scheme): <a href='https://www.retroarch.com/images/apple.png' target='_blank' rel='noreferrer'>Retroarch</a>, Pear Silver icon: <a href='https://www.needpix.com/photo/download/595504/apple-inspired-by-apple-looks-like-apple-logo-pear-pear-logo-free-vector-graphics' target='_blank' rel='noreferrer'>OpenClipart-Vectors</a>, Reaction Time Test icon (hammer): <a href='https://www.flaticon.com/free-icon/hammer_595564' target='_blank' rel='noreferrer'>Freepik</a>, Reaction Time Test icon (mouse): <a href='https://www.flaticon.com/free-icon/mouse_9615818' target='_blank' rel='noreferrer'>Vectorslab</a>, Resize Handle icon: <a href='https://www.iconfinder.com/icons/10758941/resize_handle_icon' target='_blank' rel='noreferrer'>Side by side</a>, Restart icon: <a href='https://www.iconfinder.com/icons/7623349/arrow_left_triangle_essential_left_icon_icon' target='_blank' rel='noreferrer'>Nackartwork</a>, Shutdown icon: <a href='https://www.iconfinder.com/icons/214642/switch_off_power_icon' target='_blank' rel='noreferrer'>spinking</a>,Sleep icon: <a href='https://www.iconfinder.com/icons/9040501/moon_icon' target='_blank' rel='noreferrer'>Bootstrap Icons</a>, Speaker icon: <a href='https://www.iconfinder.com/icons/9026074/speaker_high_icon' target='_blank' rel='noreferrer'>Phosphor Icons</a>, Speed Clicker icon (click impact marks): <a href='https://www.flaticon.com/free-icon/click_10700887' target='_blank' rel='noreferrer'>Sakurai</a>, Speed Clicker icon (mouse): <a href='https://www.flaticon.com/free-icon/mouse_9615818' target='_blank' rel='noreferrer'>Vectorslab</a>, Speed Clicker icon (pointing finger): <a href='https://www.flaticon.com/free-icon/tap_181838' target='_blank' rel='noreferrer'>Zlatko Najdenovski</a>, Speed Clicker icon (stopwatch): <a href='https://www.flaticon.com/free-icon/stopwatch_2055991' target='_blank' rel='noreferrer'>Freepik</a>, System Preferences icon (switch panel): <a href='https://www.iconfinder.com/icons/38937/preferences_system_icon' target='_blank' rel='noreferrer'>Blue Malboro</a>, Time icon: <a href='https://www.iconfinder.com/icons/2920358/clock_time_timeline_icon' target='_blank' rel='noreferrer'>aditvest</a>, Trash Can icon: <a href='https://www.iconfinder.com/icons/79131/empty_trash_white_icon' target='_blank' rel='noreferrer'>Laurent Baumann</a>, Wifi icon: <a href='https://www.iconfinder.com/icons/7124123/wifi_icon' target='_blank' rel='noreferrer'>Steve Schoger</a>
					</p>
				</div>
			</div>
			<div
				className='about-system-close-button-container'
			>
				<AquaButton
					aquaButtonClassName={'close-button about-system-close-button'}
					aquaButtonOnClick={appQuit}
				>
					<AquaButtonText
						aquaButtonTextClassName={'about-system-close-button-text about-close-button-text'}
						aquaButtonText={'Close'}
					/>
				</AquaButton>
			</div>
		</Window>
	);
};
