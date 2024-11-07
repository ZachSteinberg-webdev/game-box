import useWindowOpen from './useWindowOpen.jsx';

const useHandleDesktopIconDoubleClick=(
	e,
	setModalRttContainerOpen,
	setModalRttContainerOpenShowClass
)=>{
	console.log('handleDesktopIconDoubleClick', e.target);
	if(e.target.classList.contains('rtt-test-icon')){
		e.target.classList.add('rtt-test-icon-selected');
		e.target.nextElementSibling.classList.add('rtt-test-icon-title-selected');
		useWindowOpen(e, setModalRttContainerOpen, setModalRttContainerOpenShowClass, 'rtt-test-container-in-use');
	};
	if(e.target.classList.contains('rtt-test-icon-title')){
		e.target.classList.add('rtt-test-icon-title-selected');
		e.target.previousElementSibling.classList.add('rtt-test-icon-selected');
		useWindowOpen(e, setModalRttContainerOpen, setModalRttContainerOpenShowClass, 'rtt-test-container-in-use');
	};
};

export default useHandleDesktopIconDoubleClick;
