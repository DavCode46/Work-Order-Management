
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from '@components/Profile/Profile'
import Error404 from '@components/Error/Error404'
import CustomLayout from '@components/Layout/CustomLayout'
import Dashboard from '@components/Dashboard/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CustomLayout />,
    errorElement: <Error404 />,
    children: [
      {path: '/profile', element: <Profile />},
      {path: '/dashboard', element: <Dashboard />}
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
