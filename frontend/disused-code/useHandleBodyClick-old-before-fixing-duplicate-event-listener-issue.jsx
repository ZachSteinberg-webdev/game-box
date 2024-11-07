const useHandleBodyClick=(body, openApps, setOpenApps, openAppModals, setOpenAppModals)=>{
	// const body=document.body;
	const handleBodyClick=(e)=>{
		console.log('In handleBodyClick useEffect block');
		const rttTestIcon=document.querySelector('.rtt-test-icon');
		const rttTestIconTitle=document.querySelector('.rtt-test-icon-title');
		const dropdownMenus=document.querySelectorAll('.dropdown-menu');
		const openWindows=document.querySelectorAll('.window-container');
		const openModals=document.querySelectorAll('.modal-container');
		// console.log(dropdownMenus);
		if(!rttTestIcon.contains(e.target) && !rttTestIconTitle.contains(e.target)){
			if(rttTestIcon.classList.contains('rtt-test-icon-selected')){
				rttTestIcon.classList.remove('rtt-test-icon-selected');
				rttTestIconTitle.classList.remove('rtt-test-icon-title-selected');
			};
		};
		// if(rttTestIconTitle.classList.contains('rtt-test-icon-title-selected')){
		// 	rttTestIconTitle.classList.remove('rtt-test-icon-title-selected');
		// };
		dropdownMenus.forEach((dropdownMenu, i)=>{
			if(!dropdownMenu.parentElement.contains(e.target)){
				if(dropdownMenu.classList.contains('dropdown-menu-in-use')){
					dropdownMenu.classList.remove('dropdown-menu-in-use');
					dropdownMenu.parentElement.children[0].children[0].style.color = 'black';
					dropdownMenu.parentElement.children[0].children[0].style.backgroundColor = 'transparent';
				};
				if(dropdownMenu.id==='menubar-account-dropdown-menu'){
					dropdownMenu.previousElementSibling.firstElementChild.firstElementChild.children[0].style.fill='#464646';
					dropdownMenu.previousElementSibling.firstElementChild.firstElementChild.children[1].style.fill='#464646';
				};
			};
		});
		openWindows.forEach((openWindow, i)=>{
			if(openWindow.contains(e.target)){
				// console.log('openWindow', openWindow);
				// console.log('openWindow id', openWindow.id);
				const modal=openWindow.id;
				setOpenApps((currentArray)=>{
					// const newArray=[...currentArray];
					const intermediaryArray=currentArray.filter((item)=>item!==modal);
					const finalArray=[modal, ...intermediaryArray];
					// console.log('useHandleBodyClick frontmostAppArray finalArray', finalArray);
					finalArray.forEach((windowId, i) => {
						const window=document.querySelector(`#${windowId}`);
						window.style.zIndex=((finalArray.length-i)+1);
					});
					return finalArray;
				});
			};
		});
		openModals.forEach((openModal, i) => {
			if(openModal.contains(e.target)){
				console.log('openModal', openModal);
				console.log('openModal id', openModal.id);
				if(openModal.parentElement.id==='WindowRttContainer'){
					const modal=openModal.id;
					setOpenAppModals.setOpenRttModals((currentArray)=>{
						// const newArray=[...currentArray];
						const intermediaryArray=currentArray.filter((item)=>item!==modal);
						const finalArray=[modal, ...intermediaryArray];
						console.log('useHandleBodyClick frontmostModalArray finalArray', finalArray);
						finalArray.forEach((modalId, i) => {
							const appModal=document.querySelector(`#${modalId}`);
							appModal.style.zIndex=((finalArray.length-i)+1);
						});
						return finalArray;
					});
				};
			};
		});
		if(document.querySelector('.rtt-anticheat-alert-container')){
			const anticheatModal=document.querySelector('.rtt-anticheat-alert-container');
			const menubar=document.querySelector('.menubar-container');
			if(!menubar.contains(e.target) && !anticheatModal.contains(e.target)){
				anticheatModal.style.animation = "shake 0.35s";
				setTimeout(()=>{
					anticheatModal.style.animation = "";
				}, 350);
			};
		};
	};
	body.addEventListener('click', handleBodyClick);
	return()=>{
		body.removeEventListener('click', handleBodyClick);
	};
};

export default useHandleBodyClick;
