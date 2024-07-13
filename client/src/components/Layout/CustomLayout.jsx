import Sidebar from "@components/Sidebar/Sidebar"
import Spacer from "@components/UI/Spacer/Spacer"
import { Outlet } from "react-router-dom"

import './customlayout.css'

const CustomLayout = () => {
  return (
    <div className="layout">
        <Sidebar />
        <div className="layout__main-content">
          <Spacer />
          <Outlet />
        </div>
    </div>
  )
}

export default CustomLayout