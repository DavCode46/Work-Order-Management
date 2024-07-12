
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from '@components/Profile/Profile'
import Error404 from '@components/Error/Error404'
import CustomLayout from '@components/Layout/CustomLayout'
import Dashboard from '@components/Dashboard/Dashboard'
import Planner from '@components/Planner/Planner'
import Maintenance from '@components/Maintenance/Maintenance'
import Items from '@components/Items/Items'
import Locations from '@components/Locations/Locations'
import More from '@components/More/More'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CustomLayout />,
    errorElement: <Error404 />,
    children: [
      {path: '/profile', element: <Profile />},
      {path: '/dashboard', element: <Dashboard />},
      {path: '/planner', element: <Planner />},
      {path: '/maintenance', element: <Maintenance />},
      {path: '/items', element: <Items />},
      {path: '/locations', element: <Locations />},
      {path: '/more', element: <More />}
    ]
  }
])

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
