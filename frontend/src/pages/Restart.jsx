import React, {useState, useEffect} from 'react';
import {useNavigate, Link, Navigate} from 'react-router-dom';

import BackgroundImageLogin from '../components/Desktop/BackgroundImageLogin.jsx';
import Spinner from '../components/spinner/Spinner.jsx';

import pearIconBlack from '../assets/pear-icon-with-bite-v2-g.png';
import pearIconSilver from '../assets/pear-icon-with-bite-silver.png';

import '../css/pages/Restart.css';

export default function Restart(){
	const navigate=useNavigate();
	let [progressBarValue, setProgressBarValue]=useState(0);
	const progressBarIncrementer=(interval)=>{
		setTimeout(()=>{
			const initialLoadingScreen=document.querySelector('#initial-loading-screen');
			initialLoadingScreen.classList.add('initial-loading-screen-removed');
			interval=setInterval(()=>{
				if(progressBarValue<100){
					setProgressBarValue(progressBarValue+=1);
				}else{
					setTimeout(()=>{
						const restartModal=document.querySelector('#restart-modal');
						restartModal && restartModal.classList.add('restart-modal-after-load');
						setTimeout(()=>{
							clearInterval(interval);
							navigate('/login');
						},1000);
					},1000);
				};
			},100);
		},2000);
	};
	useEffect(()=>{
		let interval=0;
		progressBarIncrementer(interval);
	},[]);
	return(
		<>
			<div
				className='initial-loading-screen'
				id='initial-loading-screen'
			>
				<img
					id='initial-loading-screen-logo'
					src={pearIconBlack}
				/>
				<Spinner
					spinnerClassName={'initial-loading-screen-spinner'}
				/>
			</div>
			<div
				id='restart-page'
			>
				<BackgroundImageLogin/>
				<div
					className='restart-modal'
					id='restart-modal'
				>
					<img
						id='restart-modal-pear-icon'
						src={pearIconSilver}
					/>
					<p
						id='restart-modal-header'
					>
						Pear OS
					</p>
					<div
						id='restart-progress-bar-container'
					>
						<progress
							id='restart-progress-bar'
							max='100'
							value={progressBarValue}
						>
						</progress>
						<p
							id='restart-progress-message'
						>
							Starting Pear OS...
						</p>
					</div>
					<div
						id='restart-modal-footer-container'
					>
					</div>
				</div>
			</div>
		</>
	)
}
