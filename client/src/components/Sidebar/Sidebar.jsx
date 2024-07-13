import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { MENU_DATA } from "@data/Data.jsx";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Link to="/profile">
          <Avatar size={40} style={{ backgroundColor: "#007bff" }}>
            DB
          </Avatar>
        </Link>
      </div>
      <ul className="sidebar__menu">
        {MENU_DATA.map((item) => {
          const { key, label, path, icon: Icon } = item;
          return (
            <li key={key}>
              <Link to={path} className="sidebar__menu-item">
                <Icon className="sidebar-icon" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
