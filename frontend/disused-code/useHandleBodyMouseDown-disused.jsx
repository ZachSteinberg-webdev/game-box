const useHandleBodyMouseDown=(body)=>{
	const handleBodyMouseDown=(e)=>{
		// console.log('body mouse down target', e.target);
		if(e.target.classList.contains('drag-handle')){
			const windowElement=e.target.parentElement;
			const dragHandle=e.target;
			const windowStyles=getComputedStyle(windowElement);
			const windowWidth=window.screen.width;
			const windowHeight=window.screen.height;
			const transformData=new DOMMatrixReadOnly(windowStyles.transform);
			let movementX=transformData.m41;
			let movementY=transformData.m42;
			const handleWindowDrag=(e2)=>{
				// console.log('clientX', e2.clientX);
				// console.log('pageX', e2.pageX);
				// movementX=movementX+e2.movementX;
				// movementY=movementY+e2.movementY;
				// windowElement.style.transform=`translate(${movementX}px, ${movementY}px)`;
				if(e2.clientY>22){
					// console.log(e2);
					// console.log('clientX', e2.clientX);
					// console.log('pageX', e2.pageX);
					movementX=movementX+e2.movementX;
					movementY=movementY+e2.movementY;
					windowElement.style.transform=`translate(${movementX}px, ${movementY}px)`;
				}else{
					// console.log('Mouse out of bounds');
				};
			};
			const handleBodyMouseUp=(e)=>{
				body.removeEventListener('mousemove', handleWindowDrag);
				body.removeEventListener('mouseup', handleBodyMouseUp);
				body.removeEventListener('mouseleave', handleBodyMouseLeave);
			};
			const handleBodyMouseLeave=(e)=>{
				body.removeEventListener('mousemove', handleWindowDrag);
				body.removeEventListener('mouseup', handleBodyMouseUp);
				body.removeEventListener('mouseleave', handleBodyMouseLeave);
			};
			body.addEventListener('mousemove', handleWindowDrag);
			body.addEventListener('mouseup', handleBodyMouseUp);
			body.addEventListener('mouseleave', handleBodyMouseLeave);
		};
		if(e.target.classList.contains('resize-handle')){
			// console.log('In resize handle block');
			const windowElement=e.target.parentElement;
			const windowStyles=getComputedStyle(windowElement);
			const windowElementWidth=windowStyles.width;
			const windowElementHeight=windowStyles.height;
			let movementX=0;
			let movementY=0;
			const handleResizeDrag=(e2)=>{
				movementX=movementX+e2.movementX;
				movementY=movementY+e2.movementY;
				windowElement.style.width=`calc(${windowElementWidth} + ${movementX}px)`;
				windowElement.style.height=`calc(${windowElementHeight} + ${movementY}px)`;
			};
			const handleBodyMouseUp=(e)=>{
				body.removeEventListener('mousemove', handleResizeDrag);
				body.removeEventListener('mouseup', handleBodyMouseUp);
				body.removeEventListener('mouseleave', handleBodyMouseLeave);
			};
			const handleBodyMouseLeave=(e)=>{
				body.removeEventListener('mousemove', handleResizeDrag);
				body.removeEventListener('mouseup', handleBodyMouseUp);
				body.removeEventListener('mouseleave', handleBodyMouseLeave);
			};
			body.addEventListener('mousemove', handleResizeDrag);
			body.addEventListener('mouseup', handleBodyMouseUp);
			body.addEventListener('mouseleave', handleBodyMouseLeave);
		};
	};
	body.addEventListener('mousedown', handleBodyMouseDown);
};

export default useHandleBodyMouseDown;
