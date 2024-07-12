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
      <div className="sidebar-header">
        <Link to="/profile">
          <Avatar size={40} style={{ backgroundColor: '#007bff' }}>DB</Avatar>
        </Link>
        <div className="sidebar-title">wanderwhiskers</div>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/dashboard">
            <MdOutlineDashboardCustomize className="sidebar-icon" />
            Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/planner">
            <MdOutlineEventNote className="sidebar-icon" />
            Planner
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/maintenance">
            <MdOutlineBuild className="sidebar-icon" />
            Maintenance
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/meters">
            <MdOutlineSpeed className="sidebar-icon" />
            Meters
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/items">
            <MdOutlineWidgets className="sidebar-icon" />
            Items
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/locations">
            <MdOutlineLocationOn className="sidebar-icon" />
            Locations
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/reports">
            <MdOutlineAssessment className="sidebar-icon" />
            Reports
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/more">
            <MdOutlineMoreHoriz className="sidebar-icon" />
            More
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
