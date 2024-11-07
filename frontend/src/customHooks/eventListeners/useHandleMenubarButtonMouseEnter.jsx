const useHandleMenubarButtonMouseEnter=(e)=>{
	let shownDropdownMenu=undefined;
	const allDropdownMenus=document.querySelectorAll('.dropdown-menu');
	allDropdownMenus.forEach((dropdownMenu, i)=>{
		if(dropdownMenu.classList.contains('dropdown-menu-in-use') && !dropdownMenu.classList.contains('no-mouse-enter')){
			shownDropdownMenu=dropdownMenu;
		};
	});
	if(shownDropdownMenu && e.target!==shownDropdownMenu){
		shownDropdownMenu.classList.remove('dropdown-menu-in-use');
		shownDropdownMenu.parentElement.firstElementChild.firstElementChild.style.color='black';
		shownDropdownMenu.parentElement.firstElementChild.firstElementChild.style.backgroundColor='transparent';
		e.target.parentElement.nextElementSibling.classList.add('dropdown-menu-in-use');
		e.target.style.color = 'white';
		e.target.style.backgroundColor = '#0251CC';
	};
};

export default useHandleMenubarButtonMouseEnter;
