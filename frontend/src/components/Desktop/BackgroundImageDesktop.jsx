import React, {useState, useContext} from 'react';
import { useImageSize } from 'react-image-size';

import {UserContext} from '../../contexts/UserContext.jsx';

import Spinner from '../spinner/Spinner.jsx';

import useSetWallpaper from '../../customHooks/dataSetters/useSetWallpaper.jsx';

export default function BackgroundImageDesktop(){
	const {user, setUser}=useContext(UserContext);
	let backgroundImage=useSetWallpaper(user.wallpaper);
	const [previousBackgroundImage, setPreviousBackgroundImage]=useState('');
	const [showImageDimensions, {loading, error}]=useImageSize(backgroundImage);
	if(loading && previousBackgroundImage===''){
		return(
			<Spinner
				spinnerClassName={'background-loading-spinner'}
			/>
		);
	}else if(loading && previousBackgroundImage!==''){
		return(
			<>
				<Spinner
					spinnerClassName={'background-loading-spinner'}
				/>
				<img
					className='background-image'
					src={previousBackgroundImage}
				/>
			</>
		);
	}else if(!loading){
		return(
			<img
				className='background-image'
				src={backgroundImage}
				onLoad={(e)=>setPreviousBackgroundImage((currentValue)=>currentValue=backgroundImage)}
			/>
		);
	};
};
