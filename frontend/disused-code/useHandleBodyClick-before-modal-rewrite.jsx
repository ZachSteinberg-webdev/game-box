const useHandleBodyClick=(e, body, openApps, setOpenApps, openAppModals, setOpenAppModals)=>{
	console.log('In handleBodyClick useEffect block');
	// const rttTestIconButton=document.querySelector('.rtt-test-icon-button');
	// const rttTestIcon=document.querySelector('.desktop-rtt-test-icon');
	// const rttTestIconTitle=document.querySelector('.rtt-test-icon-title');
	const desktopIconButtons=document.querySelectorAll('.desktop-icon-button');
	const dropdownMenus=document.querySelectorAll('.dropdown-menu');
	const openWindows=document.querySelectorAll('.window-container');
	console.log('openWindows', openWindows);
	const openModals=document.querySelectorAll('.modal-container');
	// console.log(dropdownMenus);
	// Deselect desktop icon if selected
	// if(!rttTestIconButton.contains(e.target)){
	// 	if(rttTestIcon.classList.contains('rtt-test-icon-selected')){
	// 		rttTestIcon.classList.remove('rtt-test-icon-selected');
	// 		rttTestIconTitle.classList.remove('rtt-test-icon-title-selected');
	// 	};
	// };
	// if(rttTestIcon.contains(e.target)){
	// 	console.log('Icon clicked', e);
	// };
	desktopIconButtons.forEach((button, i) => {
		if(!button.contains(e.target)){
			button.children[0].classList.remove('desktop-icon-selected');
			button.children[1].classList.remove('desktop-icon-title-selected');
		};
	});

	// if(rttTestIconTitle.classList.contains('rtt-test-icon-title-selected')){
	// 	rttTestIconTitle.classList.remove('rtt-test-icon-title-selected');
	// };
	// If a click occurs outside a left-side menubar dropdown menu while it is displayed, hide it
	dropdownMenus.forEach((dropdownMenu, i)=>{
		if(!dropdownMenu.parentElement.contains(e.target)){
			if(dropdownMenu.classList.contains('dropdown-menu-in-use')){
				dropdownMenu.classList.remove('dropdown-menu-in-use');
				dropdownMenu.parentElement.children[0].children[0].style.color = 'black';
				dropdownMenu.parentElement.children[0].children[0].style.backgroundColor = 'transparent';
			};
			// If the menubar button contains an SVG icon, reset its fill colors
			if(dropdownMenu.id==='menubar-account-dropdown-menu'){
				dropdownMenu.previousElementSibling.firstElementChild.firstElementChild.children[0].style.fill='#464646';
				dropdownMenu.previousElementSibling.firstElementChild.firstElementChild.children[1].style.fill='#464646';
			};
		};
	});
	// If a click occurs on a window, set that window to be the frontmost app
	openWindows.forEach((openWindow, i)=>{
		if(openWindow.contains(e.target)){
			// console.log('openWindow', openWindow);
			// console.log('openWindow id', openWindow.id);
			const modal=openWindow.id;
			setOpenApps((currentArray)=>{
				// const newArray=[...currentArray];
				const intermediaryArray=currentArray.filter((item)=>item!==modal);
				const finalArray=[modal, ...intermediaryArray];
				let modalForceQuitOpen=false;
				if(document.querySelector('#ModalForceQuit')){
					let modalForceQuit=document.querySelector('#ModalForceQuit');
					openWindows.forEach((openWindow2, i) => {
						if(openWindow2===modalForceQuit){
							modalForceQuitOpen=true;
						}
					});
				};
				// const openWindowsArray=Array.from(openWindows);
				// console.log('openWindowsArray', openWindowsArray);

				if(modalForceQuitOpen){
					console.log('In modalForceQuitOpen block');
					let modalForceQuitIndex=finalArray.indexOf('ModalForceQuit');
					finalArray.splice(modalForceQuitIndex, 1);
					finalArray.unshift('ModalForceQuit');
					console.log('finalArray with ModalForceQuit added to front', finalArray);
				};
				// console.log('useHandleBodyClick frontmostAppArray finalArray', finalArray);
				finalArray.forEach((windowId, i) => {
					const window=document.querySelector(`#${windowId}`);
					window.style.zIndex=((finalArray.length-i)+1);
				});
				return finalArray;
			});
		};
	});
	// If a click occurs on a modal, set that modal to be the frontmost modal of its respective app
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
			}else if(openModal.parentElement.id==='WindowOtwContainer'){
				const modal=openModal.id;
				setOpenAppModals.setOpenOtwModals((currentArray)=>{
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
	// If the RTT anticheat modal is displayed and a click occurs outside it and within the RTT window, shake the anticheat modal
	if(document.querySelector('.rtt-anticheat-alert-container')){
		const anticheatModal=document.querySelector('.rtt-anticheat-alert-container');
		const menubar=document.querySelector('.menubar-container');
		if(!menubar.contains(e.target) && !anticheatModal.contains(e.target)){
			// anticheatModal.style.animation = "shake 0.35s";
			// setTimeout(()=>{
			// 	anticheatModal.style.animation = "";
			// }, 350);
			const currentTransformStyle=anticheatModal.style.transform;
			anticheatModal.style.transform=currentTransformStyle+'rotate(-1deg)';
			setTimeout(()=>{
				// anticheatModal.style.transform=currentTransformStyle;
				anticheatModal.style.transform=currentTransformStyle+'rotate(1deg)';
				setTimeout(()=>{
					// anticheatModal.style.transform=currentTransformStyle;
					anticheatModal.style.transform=currentTransformStyle+'rotate(-1deg)';
					setTimeout(()=>{
						// anticheatModal.style.transform=currentTransformStyle;
						anticheatModal.style.transform=currentTransformStyle+'rotate(1deg)';
						setTimeout(()=>{
							// anticheatModal.style.transform=currentTransformStyle;
							anticheatModal.style.transform=currentTransformStyle+'rotate(-1deg)';
							setTimeout(()=>{
								// anticheatModal.style.transform=currentTransformStyle;
								anticheatModal.style.transform=currentTransformStyle+'rotate(1deg)';
								setTimeout(()=>{
									// anticheatModal.style.transform=currentTransformStyle;
									anticheatModal.style.transform=currentTransformStyle+'rotate(-1deg)';
									setTimeout(()=>{
										// anticheatModal.style.transform=currentTransformStyle;
										anticheatModal.style.transform=currentTransformStyle+'rotate(1deg)';
										setTimeout(()=>{
											// anticheatModal.style.transform=currentTransformStyle;
											anticheatModal.style.transform=currentTransformStyle+'rotate(-1deg)';
											setTimeout(()=>{
												// anticheatModal.style.transform=currentTransformStyle;
												anticheatModal.style.transform=currentTransformStyle+'rotate(0deg)';
												setTimeout(()=>{
													anticheatModal.style.transform=currentTransformStyle;
												},35);
											},35);
										},35);
									},35);
								},35);
							},35);
						},35);
					},35);
				},35);
			},35);
		};
	};
	// If a click occurs on a window or modal title bar, initiate the window/modal drag process
	if(e.target.classList.contains('drag-handle')){
		console.log('In drag handle block');
		const windowElement=e.target.parentElement;
		const dragHandle=e.target;
		const windowStyles=getComputedStyle(windowElement);
		const windowWidth=window.screen.width;
		const windowHeight=window.screen.height;
		const transformData=new DOMMatrixReadOnly(windowStyles.transform);
		let movementX=transformData.m41;
		let movementY=transformData.m42;
		const handleWindowDrag=(e2)=>{
			// console.log('clientX', e2.clientX);
			// console.log('pageX', e2.pageX);
			// movementX=movementX+e2.movementX;
			// movementY=movementY+e2.movementY;
			// windowElement.style.transform=`translate(${movementX}px, ${movementY}px)`;
			if(e2.clientY>22){
				// console.log(e2);
				// console.log('clientX', e2.clientX);
				// console.log('pageX', e2.pageX);
				movementX=movementX+e2.movementX;
				movementY=movementY+e2.movementY;
				windowElement.style.transform=`translate(${movementX}px, ${movementY}px)`;
			}else{
				// console.log('Mouse out of bounds');
			};
		};
		const handleBodyMouseUp=(e)=>{
			body.removeEventListener('mousemove', handleWindowDrag);
			body.removeEventListener('mouseup', handleBodyMouseUp);
			body.removeEventListener('mouseleave', handleBodyMouseLeave);
		};
		const handleBodyMouseLeave=(e)=>{
			body.removeEventListener('mousemove', handleWindowDrag);
			body.removeEventListener('mouseup', handleBodyMouseUp);
			body.removeEventListener('mouseleave', handleBodyMouseLeave);
		};
		body.addEventListener('mousemove', handleWindowDrag);
		body.addEventListener('mouseup', handleBodyMouseUp);
		body.addEventListener('mouseleave', handleBodyMouseLeave);
	};
	// If a click occurs on a window's resizing handle, initiate the window resizing process
	if(e.target.classList.contains('resize-handle')){
		console.log('In resize handle block');
		const windowElement=e.target.parentElement;
		const windowStyles=getComputedStyle(windowElement);
		const windowElementWidth=windowStyles.width;
		const windowElementHeight=windowStyles.height;
		const windowCurrentTransitionStyle=windowStyles.transition;
		let movementX=0;
		let movementY=0;
		windowElement.style.transition='height 0ms, width 0ms';
		const handleResizeDrag=(e2)=>{
			movementX=movementX+e2.movementX;
			movementY=movementY+e2.movementY;
			windowElement.style.width=`calc(${windowElementWidth} + ${movementX}px)`;
			windowElement.style.height=`calc(${windowElementHeight} + ${movementY}px)`;
		};
		const handleBodyMouseUp=(e)=>{
			windowElement.style.transition=windowCurrentTransitionStyle;
			body.removeEventListener('mousemove', handleResizeDrag);
			body.removeEventListener('mouseup', handleBodyMouseUp);
			body.removeEventListener('mouseleave', handleBodyMouseLeave);
		};
		const handleBodyMouseLeave=(e)=>{
			windowElement.style.transition=windowCurrentTransitionStyle;
			body.removeEventListener('mousemove', handleResizeDrag);
			body.removeEventListener('mouseup', handleBodyMouseUp);
			body.removeEventListener('mouseleave', handleBodyMouseLeave);
		};
		body.addEventListener('mousemove', handleResizeDrag);
		body.addEventListener('mouseup', handleBodyMouseUp);
		body.addEventListener('mouseleave', handleBodyMouseLeave);
	};
};


export default useHandleBodyClick;
