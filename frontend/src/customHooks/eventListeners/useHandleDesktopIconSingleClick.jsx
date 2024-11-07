const useHandleDesktopIconSingleClick=(e)=>{
	e.target.children[0].classList.add('desktop-icon-selected');
	e.target.children[1].classList.add('desktop-icon-title-selected');
};

export default useHandleDesktopIconSingleClick;
