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
				spinnerClassName={'background-loading-spinner-register'}
			/>
		);
	}else if(loading && previousBackgroundImage!==''){
		return(
			<>
				<Spinner
					spinnerClassName={'background-loading-spinner-register'}
				/>
				<img
					className='background-image-register'
					src={previousBackgroundImage}
				/>
				<div className='background-image-credit-container-register'>
					<p className='background-image-credit-text-register'>
						{'Image credit: '}
						<a
							className='background-image-credit-link-register'
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
					className='background-image-register'
					src={backgroundImage}
					onLoad={(e)=>setPreviousBackgroundImage((currentValue)=>currentValue=backgroundImage)}
				/>
				<div className='background-image-credit-container-register'>
					<p className='background-image-credit-text-register'>
						{'Image credit: '}
						<a
							className='background-image-credit-link-register'
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
