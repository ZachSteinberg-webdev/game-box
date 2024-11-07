import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import {ModalContextProvider} from './contexts/ModalContext.jsx';

import PrivateRoute from './components/privateRoute/PrivateRoute.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import LockScreen from './pages/LockScreen.jsx';
import Restart from './pages/Restart.jsx';
import Shutdown from './pages/Shutdown.jsx';

import './App.css';

function App(){
	return(
		<>
			<ModalContextProvider>
				<Routes>
					<Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}/>
					<Route path='/register' element={<Register/>}/>
					<Route path='/login' element={<Login/>}/>
					<Route path='/lockscreen' element={<LockScreen/>}/>
					<Route path='/restart' element={<Restart/>}/>
					<Route path='/shutdown' element={<Shutdown/>}/>
				</Routes>
			</ModalContextProvider>
		</>
	);
};

export default App;
