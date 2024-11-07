import React, {useState} from 'react';
import { useImageSize } from 'react-image-size';

import Spinner from '../spinner/Spinner.jsx';

import useSetWallpaper from '../../customHooks/dataSetters/useSetWallpaper.jsx';
import useSetWallpaperDetails from '../../customHooks/dataSetters/useSetWallpaperDetails.jsx';

export default function BackgroundImageLogin(){
	const wallpaperId=JSON.parse(localStorage.getItem('wallpaper'));
	let backgroundImage=useSetWallpaper(wallpaperId);
	const {imageCreditHref, imageCreditName}=useSetWallpaperDetails(wallpaperId);
	const [previousBackgroundImage, setPreviousBackgroundImage]=useState('');
	const [showImageDimensions, {loading, error}]=useImageSize(backgroundImage);
	if(loading && previousBackgroundImage===''){
		return(
			<Spinner
				spinnerClassName={'background-loading-spinner-login'}
			/>
		);
	}else if(loading && previousBackgroundImage!==''){
		return(
			<>
				<Spinner
					spinnerClassName={'background-loading-spinner-login'}
				/>
				<img
					className='background-image-login'
					src={previousBackgroundImage}
				/>
				<div className='background-image-credit-container-login'>
					<p className='background-image-credit-text-login'>
						{'Image credit: '}
						<a
							className='background-image-credit-link-login'
							rel='noreferrer'
							target='_blank'

							href={imageCreditHref}
						>
								{imageCreditName}
						</a>
					</p>
				</div>
			</>
		);
	}else if(!loading){
		return(
			<>
				<img
					className='background-image-login'
					src={backgroundImage}
					onLoad={(e)=>setPreviousBackgroundImage((currentValue)=>currentValue=backgroundImage)}
				/>
				<div className='background-image-credit-container-login'>
					<p className='background-image-credit-text-login'>
						{'Image credit: '}
						<a
							className='background-image-credit-link-login'
							rel='noreferrer'
							target='_blank'

							href={imageCreditHref}
						>
								{imageCreditName}
						</a>
					</p>
				</div>
			</>
		);
	};
};
