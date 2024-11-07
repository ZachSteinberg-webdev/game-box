// For use on modals WITH traffic light buttons
const useAppStart=(
	modal,
	openWindowsModals,
	setOpenWindowsModals,
	openApps,
	setOpenApps,
	setMenubarOpen,
	setModalOpen,
	setModalOpenShowClass,
	showClassString
)=>{
	if(setMenubarOpen!=='NoMenubar'){
		setMenubarOpen(true);
	};
	setModalOpen(true);
	setTimeout(()=>{
		setModalOpenShowClass(showClassString);
	},100);
	let storedNewArray=[];
	if(!openWindowsModals.includes(modal)){
		setOpenWindowsModals((currentArray)=>{
			const newArray=[modal, ...currentArray];
			if(newArray.includes('ModalForceQuit')){
				let modalForceQuitIndex=newArray.indexOf('ModalForceQuit');
				newArray.splice(modalForceQuitIndex, 1);
				newArray.unshift('ModalForceQuit');
			};
			setTimeout(()=>{
				newArray.forEach((windowOrModalId, i) => {
					const windowOrModal=document.querySelector(`#${windowOrModalId}`);
					if(windowOrModal){
						windowOrModal.style.zIndex=((newArray.length-i)+1);
					};
				});
			},100);
			return newArray;
		});
	}else{
		setOpenWindowsModals((currentArray)=>{
			const intermediaryArray=currentArray.filter((item)=>item!==modal);
			const finalArray=[modal, ...intermediaryArray];
			if(finalArray.includes('ModalForceQuit')){
				let modalForceQuitIndex=finalArray.indexOf('ModalForceQuit');
				finalArray.splice(modalForceQuitIndex, 1);
				finalArray.unshift('ModalForceQuit');
			};
			setTimeout(()=>{
				finalArray.forEach((windowOrModalId, i) => {
					const windowOrModal=document.querySelector(`#${windowOrModalId}`);
					windowOrModal.style.zIndex=((finalArray.length-i)+1);
				});
			},100);
			return finalArray;
		});
	};
};

export default useAppStart;
