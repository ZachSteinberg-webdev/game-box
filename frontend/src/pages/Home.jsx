import React from 'react';

import {UserContextProvider} from '../contexts/UserContext.jsx';
import {RttContextProvider} from '../contexts/RttContext.jsx';
import {ScContextProvider} from '../contexts/ScContext.jsx';
import {OtwContextProvider} from '../contexts/OtwContext.jsx';

import Desktop from '../components/Desktop/Desktop.jsx';

export default function Home(){
	return(
		<>
			<UserContextProvider>
				<RttContextProvider>
					<ScContextProvider>
						<OtwContextProvider>
							<Desktop/>
						</OtwContextProvider>
					</ScContextProvider>
				</RttContextProvider>
			</UserContextProvider>
		</>
	);
};
