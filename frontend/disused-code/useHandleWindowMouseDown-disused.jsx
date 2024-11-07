const useHandleWindowMouseDown=(e1)=>{
	console.log('In mousedown');
	let windowElement=e1.target.parentElement;
	console.log('windowElement', windowElement);
	let windowStyles = window.getComputedStyle(windowElement);
	let top=parseInt(windowStyles.top);
	let bottom=parseInt(windowStyles.bottom);
	let left=parseInt(windowStyles.left);
	let right=parseInt(windowStyles.right);
	console.log('top', top);
	console.log('bottom', bottom);
	console.log('left', left);
	console.log('right', right);
	const handleMouseMove=(e2)=>{
		console.log('In mousemove');
		windowElement.style.transition='opacity 250ms, visibility 250ms, height 250ms, width 250ms, top 0ms, bottom 0ms, left 0ms, right 0ms';
		let movementX = e2.movementX;
		console.log('movementX', movementX);
		let movementY = e2.movementY;
		console.log('movementY', movementY);
		windowElement.style.top=`${top+movementY}px`;
		windowElement.style.bottom=`${bottom-movementY}px`;
		windowElement.style.left=`${left+movementX}px`;
		windowElement.style.right=`${right-movementX}px`;
		top=windowElement.style.top;
		console.log('top', top);
		bottom=windowElement.style.bottom;
		console.log('bottom', bottom);
		left=windowElement.style.left;
		console.log('left', left);
		right=windowElement.style.right;
		console.log('right', right);
	};
	const handleMouseUp=(e3)=>{
		e1.target.removeEventListener('mousemove', handleMouseMove);
		e1.target.removeEventListener('mouseup', handleMouseUp);
		windowElement.style.transition='opacity 250ms, visibility 250ms, height 250ms, width 250ms, top 250ms, bottom 250ms, left 250ms, right 250ms';
	};
	e1.target.addEventListener('mousemove', handleMouseMove);
	e1.target.addEventListener('mouseup', handleMouseUp);
};

export default useHandleWindowMouseDown;
