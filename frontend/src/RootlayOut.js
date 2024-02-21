import React from 'react';
import {Outlet} from 'react-router-dom';
import NavigationBar from './components/navigationbar/NavigationBar';
function RootlayOut() {
	return(
		<div>
		<NavigationBar />
		<Outlet />
		</div>
	);
}
export default RootlayOut;