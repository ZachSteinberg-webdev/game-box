const useHandleBodyClick=(
	e,
	body,
	openWindowsModals,
	setOpenWindowsModals,
	openApps,
	setOpenApps,
	openAppModals,
	setOpenAppModals
)=>{
	// Setup for below sections
	const desktopIconButtons=document.querySelectorAll('.desktop-icon-button');
	const dropdownMenus=document.querySelectorAll('.dropdown-menu');
	const openWindowsAndModals=document.querySelectorAll('.window-modal-container ');

	// If a click occurs on an element other than a desktop icon, remove any selected desktop icon stylings currently applied
	desktopIconButtons.forEach((button, i) => {
		if(!button.contains(e.target)){
			button.children[0].classList.remove('desktop-icon-selected');
			button.children[1].classList.remove('desktop-icon-title-selected');
		};
	});

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
	// If a click occurs on a window or modal, set that window/modal to be the frontmost object
	openWindowsAndModals.forEach((openWindowOrModal, i) => {
		if(openWindowOrModal.contains(e.target)){
			const windowOrModal=openWindowOrModal.id;
			setOpenWindowsModals((currentArray)=>{
				const intermediaryArray=currentArray.filter((item)=>item!==windowOrModal);
				const finalArray=[windowOrModal, ...intermediaryArray];
				let modalForceQuitOpen=false;
				if(document.querySelector('#ModalForceQuit')){
					let modalForceQuit=document.querySelector('#ModalForceQuit');
					openWindowsAndModals.forEach((openWindowOrModal2, i) => {
						if(openWindowOrModal2===modalForceQuit){
							modalForceQuitOpen=true;
						};
					});
				};
				if(modalForceQuitOpen){
					let modalForceQuitIndex=finalArray.indexOf('ModalForceQuit');
					finalArray.splice(modalForceQuitIndex, 1);
					finalArray.unshift('ModalForceQuit');
				};
				finalArray.forEach((windowOrModalId, i) => {
					const windowOrModal=document.querySelector(`#${windowOrModalId}`);
					if(windowOrModal){
						windowOrModal.style.zIndex=((finalArray.length-i)+1);
					};
				});
				return finalArray;
			});
		};
	});

	// If the RTT anticheat modal is displayed and a click occurs outside it and within the RTT window, shake the anticheat modal
	if(document.querySelector('.rtt-anticheat-alert-container')){
		const anticheatModal=document.querySelector('.rtt-anticheat-alert-container');
		const menubar=document.querySelector('.menubar-container');
		if(!menubar.contains(e.target) && !anticheatModal.contains(e.target)){
			const currentTransformStyle=anticheatModal.style.transform;
			anticheatModal.style.transform=currentTransformStyle+'rotate(-1deg)';
			setTimeout(()=>{
				anticheatModal.style.transform=currentTransformStyle+'rotate(1deg)';
				setTimeout(()=>{
					anticheatModal.style.transform=currentTransformStyle+'rotate(-1deg)';
					setTimeout(()=>{
						anticheatModal.style.transform=currentTransformStyle+'rotate(1deg)';
						setTimeout(()=>{
							anticheatModal.style.transform=currentTransformStyle+'rotate(-1deg)';
							setTimeout(()=>{
								anticheatModal.style.transform=currentTransformStyle+'rotate(1deg)';
								setTimeout(()=>{
									anticheatModal.style.transform=currentTransformStyle+'rotate(-1deg)';
									setTimeout(()=>{
										anticheatModal.style.transform=currentTransformStyle+'rotate(1deg)';
										setTimeout(()=>{
											anticheatModal.style.transform=currentTransformStyle+'rotate(-1deg)';
											setTimeout(()=>{
												anticheatModal.style.transform=currentTransformStyle+'rotate(0deg)';
												setTimeout(()=>{
													anticheatModal.style.transform=currentTransformStyle+'rotate(0deg)';
													setTimeout(()=>{
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
				},35);
			},35);
		};
	};

	// If a click occurs on a window or modal title bar, initiate the window/modal drag process
	if(e.target.classList.contains('drag-handle')){
		const windowElement=e.target.parentElement;
		const dragHandle=e.target;
		const windowStyles=getComputedStyle(windowElement);
		const windowWidth=window.screen.width;
		const windowHeight=window.screen.height;
		const transformData=new DOMMatrixReadOnly(windowStyles.transform);
		let movementX=transformData.m41;
		let movementY=transformData.m42;
		const handleWindowDrag=(e2)=>{
			if(e2.clientY>22){
				movementX=movementX+e2.movementX;
				movementY=movementY+e2.movementY;
				windowElement.style.transform=`translate(${movementX}px, ${movementY}px)`;
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
