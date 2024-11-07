import useModalClose from './useModalClose.jsx';
import useAppQuit from './useAppQuit.jsx';
import useHandleRttTestQuit from '../eventListeners/useHandleRttTestQuit.jsx';
import useHandleSleep from './useHandleSleep.jsx';
import useHandleWake from './useHandleWake.jsx';

const useHandleShutdownRestartFromLoginRegister=(
	e,
	navigate,
	setModals,
	setModalShowClasses,
)=>{
	const delay=1500;
	let showSpinnerTimeout=(delay*0.2);
	let sleepTimeout=(delay*2);
	let navigateTimeout=(delay*3);

	setTimeout(()=>{
		const spinner=document.querySelector('.spinner');
		spinner.style.display='block';
	},showSpinnerTimeout);
	setTimeout(()=>{
		useHandleSleep(setModals, setModalShowClasses);
	},sleepTimeout);
	setTimeout(()=>{
		useHandleWake(setModals, setModalShowClasses);
		if(e.target.id==='shutdown-button'){
			navigate('/shutdown');
		}else if(e.target.id==='restart-button'){
			navigate('/restart');
		};
	},navigateTimeout);
};

export default useHandleShutdownRestartFromLoginRegister;
