const useHandleDockHide=(e)=>{
	const dock=document.querySelector('#dock');
	const dockDeactivator=document.querySelector('#dock-deactivator');
	if((!dock.contains(e.relatedTarget) && !dockDeactivator.contains(e.relatedTarget))){
		dock.classList.remove('dock-show');
		dockDeactivator.classList.remove('dock-deactivator-show');
	};
};

export default useHandleDockHide;
