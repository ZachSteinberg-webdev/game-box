import React from 'react';
import {useNavigate, Link, Navigate} from 'react-router-dom';

import PowerIcon from '../components/Icons/PowerIcon.jsx';

import powerButtonImage from '/src/assets/power-button.png';

import '../css/pages/Shutdown.css';

export default function Shutdown(){
	const navigate=useNavigate();
	const handleStart=(e)=>{
		setTimeout(()=>{
			navigate('/restart');
		},500);
	}
	return(
		<div
			className='shutdown-page'
			id='shutdown-page'
		>
			<div
				id='start-button'
			>
				<img
					className='shutdown-power-button'
					src={powerButtonImage}
					onClick={handleStart}
				/>
				<p
					className='start-message'
				>
					Click to start
				</p>
			</div>
		</div>
	)
}
