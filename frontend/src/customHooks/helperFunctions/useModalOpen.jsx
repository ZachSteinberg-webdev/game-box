// For use on modals WITHOUT traffic light buttons
const useModalOpen=(
	modal,
	openWindowsModals,
	setOpenWindowsModals,
	openModals,
	setOpenModals,
	setModalOpen,
	setModalOpenShowClass,
	showClassString
)=>{
	setModalOpen(true);
	setTimeout(()=>{
		setModalOpenShowClass(showClassString);
	},100);
	let storedNewArray=[];
	if(!openWindowsModals.includes(modal)){
		setOpenWindowsModals((currentArray)=>{
			const newArray=[modal, ...currentArray];
			storedNewArray=[...newArray];
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
			setTimeout(()=>{
				finalArray.forEach((windowOrModalId, i) => {
					const windowOrModal=document.querySelector(`#${windowOrModalId}`);
					if(windowOrModal){
						windowOrModal.style.zIndex=((finalArray.length-i)+1);
					};
				});
			},100);
			return finalArray;
		});
	};
};

export default useModalOpen;
