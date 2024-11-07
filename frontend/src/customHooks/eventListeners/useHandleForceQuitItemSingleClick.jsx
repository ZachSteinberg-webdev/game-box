const useHandleForceQuitItemSingleClick=(e)=>{
	const forceQuitItems=document.querySelectorAll('.fq-list-item');
	forceQuitItems.forEach((item, i) => {
		if(item.contains(e.target)){
			item.classList.add('fq-list-item-selected');
		}else{
			item.classList.remove('fq-list-item-selected');
		};
	});
};

export default useHandleForceQuitItemSingleClick;
