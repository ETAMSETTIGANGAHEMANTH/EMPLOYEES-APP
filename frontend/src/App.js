
import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootlayOut from './RootlayOut';
import AddEmployees from './components/addemployees/AddEmployees';
import Employees  from './components/employees/Employees';
import RemovedEmployees from './components/removedemployees/RemovedEmployees';
import Login from './components/login/Login';

function App() {
	const router = createBrowserRouter([{
		path : '/',
		element : <RootlayOut/>,
		children : [
			{
				path:'/',
				element:<AddEmployees />
			},
			{
				path:'/addemployee',
				element:<AddEmployees />
			},
			{
				path:'/employees',
				element:<Employees />
			},
			{
				path : '/removedemployees',
				element:<RemovedEmployees />
			},
			{
				path:'/login',
				element : <Login/>
			}
		]
	}])
  return (
    <div>
     {/*this is router provider */}
     <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
