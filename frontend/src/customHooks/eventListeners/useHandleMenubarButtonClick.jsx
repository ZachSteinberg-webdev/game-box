const useHandleMenubarButtonClick=(e)=>{
	const button=e.target;
	if(button.id==='menubar-clock'){
		const minWidth=getComputedStyle(button.parentElement).getPropertyValue('width');
		button.parentElement.nextElementSibling.style.minWidth=minWidth;
	};
	if(button.id==='menubar-account-icon-and-account-name' && !button.parentElement.nextElementSibling.classList.contains('dropdown-menu-in-use')){
		button.firstElementChild.children[0].style.fill='white';
		button.firstElementChild.children[1].style.fill='white';
	}else if(button.id==='menubar-account-icon-and-account-name' && button.parentElement.nextElementSibling.classList.contains('dropdown-menu-in-use')){
		button.firstElementChild.children[0].style.fill='#464646';
		button.firstElementChild.children[1].style.fill='#464646';
	};
	if(!button.parentElement.nextElementSibling.classList.contains('dropdown-menu-in-use')){
		button.parentElement.nextElementSibling.classList.add('dropdown-menu-in-use');
		button.style.color = 'white';
		button.style.backgroundColor = '#0251CC';
	}else{
		button.parentElement.nextElementSibling.classList.remove('dropdown-menu-in-use');
		button.style.color = 'black';
		button.style.backgroundColor = 'transparent';
	};
};

export default useHandleMenubarButtonClick;
