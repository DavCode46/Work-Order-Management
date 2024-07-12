import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import {
  MdOutlineDashboardCustomize,
  MdOutlineEventNote,
  MdOutlineBuild,
  MdOutlineSpeed,
  MdOutlineWidgets,
  MdOutlineLocationOn,
  MdOutlineAssessment,
  MdOutlineMoreHoriz
} from 'react-icons/md';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Link to="/profile">
          <Avatar size={40} style={{ backgroundColor: '#007bff' }}>DB</Avatar>
        </Link>
      </div>
      <ul className="sidebar__menu">
        <li>
          <Link to="/dashboard" className='sidebar__menu-item'>
            <MdOutlineDashboardCustomize className="sidebar-icon" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/planner" className='sidebar__menu-item'>
            <MdOutlineEventNote className="sidebar-icon" />
            Planner
          </Link>
        </li>
        <li>
          <Link to="/maintenance" className='sidebar__menu-item'>
            <MdOutlineBuild className="sidebar-icon" />
            Maintenance
          </Link>
        </li>
        <li>
          <Link to="/meters" className='sidebar__menu-item'>
            <MdOutlineSpeed className="sidebar-icon" />
            Meters
          </Link>
        </li>
        <li>
          <Link to="/items" className='sidebar__menu-item'>
            <MdOutlineWidgets className="sidebar-icon" />
            Items
          </Link>
        </li>
        <li>
          <Link to="/locations" className='sidebar__menu-item'>
            <MdOutlineLocationOn className="sidebar-icon" />
            Locations
          </Link>
        </li>
        <li>
          <Link to="/reports" className='sidebar__menu-item'>
            <MdOutlineAssessment className="sidebar-icon" />
            Reports
          </Link>
        </li>
        <li>
          <Link to="/more" className='sidebar__menu-item'>
            <MdOutlineMoreHoriz className="sidebar-icon" />
            More
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
