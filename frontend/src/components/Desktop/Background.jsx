import React, {useState, useContext, useCallback} from 'react';

import {UserContext} from '../../contexts/UserContext.jsx';

import BackgroundImageDesktop from './BackgroundImageDesktop.jsx';
import DesktopIcon from './DesktopIcon.jsx';

import useSetWallpaperDetails from '../../customHooks/dataSetters/useSetWallpaperDetails.jsx';

import '../../css/Desktop/Background.css';

export default function Background(){
	const {user, setUser}=useContext(UserContext);
	const {imageCreditHref, imageCreditName}=useSetWallpaperDetails(user.wallpaper);
	return(
		<div className='desktop-background'>
			<BackgroundImageDesktop/>
			<DesktopIcon
				desktopIconContainerClassName={'desktop-icon-container desktop-rtt-test-icon-container'}
				desktopIconButtonClassName={'desktop-icon-button desktop-rtt-test-icon-button'}
				desktopIconClassName={'desktop-icon desktop-rtt-test-icon'}
				desktopIconTitleClassName={'desktop-icon-title desktop-rtt-test-icon-title'}
				desktopIconTitleText={'ReactionTimeTest.app'}
			/>
			<DesktopIcon
				desktopIconContainerClassName={'desktop-icon-container desktop-sc-test-icon-container'}
				desktopIconButtonClassName={'desktop-icon-button desktop-sc-test-icon-button'}
				desktopIconClassName={'desktop-icon desktop-sc-test-icon'}
				desktopIconTitleClassName={'desktop-icon-title desktop-sc-test-icon-title'}
				desktopIconTitleText={'SpeedClicker.app'}
			/>
			<DesktopIcon
				desktopIconContainerClassName={'desktop-icon-container desktop-otw-icon-container'}
				desktopIconButtonClassName={'desktop-icon-button desktop-otw-icon-button'}
				desktopIconClassName={'desktop-icon desktop-otw-icon'}
				desktopIconTitleClassName={'desktop-icon-title desktop-otw-icon-title'}
				desktopIconTitleText={'OffTheWall.app'}
			/>
			<div className='background-image-credit-container'>
				<p className='background-image-credit-text'>
					{'Image credit: '}
					<a
						className='background-image-credit-link'
						rel='noreferrer'
						target='_blank'
						href={imageCreditHref}
					>
							{imageCreditName}
					</a>
				</p>
			</div>
		</div>
	);
};
