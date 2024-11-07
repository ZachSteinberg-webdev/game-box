const useHandleRttWindowClick=()=>{
	const rttWindow=document.querySelector('#WindowRttContainer');
	console.log('rttWindow', rttWindow);
	const handleRttWindowClick=(e)=>{
		// const rttWindow2=document.querySelector('#WindowRttContainer');
		const menubar=document.querySelector('.menubar-container');
		let anticheatModal;
		if(document.querySelector('.rtt-anticheat-alert-container'))
		anticheatModal=document.querySelector('.rtt-anticheat-alert-container');
		console.log('anticheatModal', anticheatModal);
		if(anticheatModal && !menubar.contains(e.target) && !anticheatModal.contains(e.target)){
			anticheatModal.style.animation = "shake 0.35s";
			setTimeout(()=>{
				anticheatModal.style.animation = "";
			}, 350);
		};
	};
	rttWindow.addEventListener('click', handleRttWindowClick);
	return()=>{
		rttWindow.removeEventListener('click', handleRttWindowClick);
	};
};

export default useHandleRttWindowClick;
