const useHandleDragHandleMouseDown=(e)=>{
	console.log(e);
	console.log(e.target);
	console.log(e.target.parentElement);
	const windowElement=e.target.parentElement;
	const dragHandle=e.target;
	let movementX=0;
	let movementY=0;
	const handleDragHandleDrag=(e)=>{
		movementX=movementX+e.movementX;
		movementY=movementY+e.movementY;
		console.log('movementX', movementX);
		console.log('movementY', movementY);
		windowElement.style.transform=`translate(${movementX}px, ${movementY}px)`;
	};
	const removeDragListeners=(e)=>{
		dragHandle.removeEventListener('mousemove', handleDragHandleDrag);
		dragHandle.removeEventListener('mouseup', removeDragListeners);
	};
	dragHandle.addEventListener('mousemove', handleDragHandleDrag);
	dragHandle.addEventListener('mouseup', removeDragListeners);
	// return()=>{
	// 	dragHandle.removeEventListener('mousemove', handleDragHandleDrag);
	// }
};

export default useHandleDragHandleMouseDown;
