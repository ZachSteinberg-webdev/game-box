import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import '../../css/Desktop/GuestModeBanner.css';

const GUEST_ALERT_DISMISS_KEY = 'guestBannerDismissed';

export default function GuestModeBanner(){
	const [isVisible, setIsVisible]=useState(()=>{
		if(typeof window==='undefined'){
			return true;
		};
		return localStorage.getItem(GUEST_ALERT_DISMISS_KEY)!=='true';
	});
	useEffect(()=>{
		if(typeof window==='undefined'){
			return;
		};
		if(!isVisible){
			localStorage.setItem(GUEST_ALERT_DISMISS_KEY, 'true');
		};
	},[isVisible]);
	if(!isVisible){
		return null;
	};
	const handleDismiss=()=>{
		setIsVisible(false);
	};
	return(
		<div className='guest-banner'>
			<div className='guest-banner-text'>
				You are exploring as a guest. <Link to='/register' className='guest-banner-link'>Create an account</Link> to save your progress permanently.
			</div>
			<button
				className='guest-banner-dismiss'
				type='button'
				onClick={handleDismiss}
				aria-label='Dismiss guest mode notification'
			>
				×
			</button>
		</div>
	);
};
