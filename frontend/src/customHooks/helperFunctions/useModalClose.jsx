// For use on modals WITHOUT traffic light buttons
const useModalClose=(
	modal,
	openWindowsModals,
	setOpenWindowsModals,
	openModals,
	setOpenModals,
	setModalOpen,
	setModalOpenShowClass
)=>{
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
		},1000);
		return newArray;
	});
};

export default useModalClose;
