// For use on modals WITH traffic light buttons
const useAppQuit=(
	modal,
	openWindowsModals,
	setOpenWindowsModals,
	openApps,
	setOpenApps,
	setMenubarOpen,
	setModalOpen,
	setModalOpenShowClass
)=>{
	if(setMenubarOpen!=='NoMenubar'){
		setMenubarOpen(false);
	};
	setModalOpenShowClass('');
	setTimeout(()=>{
		setModalOpen(false);
	},500);
	setOpenWindowsModals((currentArray)=>{
		const newArray=currentArray.filter((item)=>item!==modal);
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
};

export default useAppQuit;
