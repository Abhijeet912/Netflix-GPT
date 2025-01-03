import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Login } from './Login';
import { Browse } from './Browse';

export const Body = () => {
  

    //routing in front end
    const appRouter=createBrowserRouter([
	    {
	        path: "/",
	        element:<Login/>
	    },
	    {
	        path:"/browse",
	        element:<Browse/>,
	    },
	]);


  
  


  return (
    <div>
        	<RouterProvider router={appRouter}/>

    </div>
  )
}
