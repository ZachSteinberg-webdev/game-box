const useHandleDockShow=(e)=>{
	if(e.relatedTarget.classList!==undefined && !e.relatedTarget.classList.contains('resize-handle')){
		const dock=document.querySelector('#dock');
		const dockDeactivator=document.querySelector('#dock-deactivator');
		dock.classList.add('dock-show');
		dockDeactivator.classList.add('dock-deactivator-show');
	};
};

export default useHandleDockShow;
