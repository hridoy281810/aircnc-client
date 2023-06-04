import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import RoomDetails from '../Pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../Pages/DashboardPages/AddRoom'
import { getRoom } from '../Api/rooms'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
      path: '/room/:id',
      element: <PrivateRoute><RoomDetails></RoomDetails>  </PrivateRoute>,
      loader: ({params})=> getRoom(params.id)
      }
    ]
  },
   {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path:'/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children:[
          {
           path:'/dashboard/add-room',
           element: <AddRoom></AddRoom> 
          }
        ]
      }

])
