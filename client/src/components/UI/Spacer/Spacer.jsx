import { Select, Input, Button } from "antd";
import { MENU_DATA } from "@data/Data.jsx";
import {
  PlusCircleOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./spacer.css";

const Spacer = () => {
  return (
    <div className="spacer">
      <h2 className="spacer__heading">wanderwhiskers</h2>
      <div className="spacer__searchbar">
        <Select style={{ width: 200 }} defaultValue="All">
          {MENU_DATA.map((item) => {
            const { key, label, icon: Icon } = item;
            return (
              <Select.Option key={key} value={key}>
                <div className="select__option">
                  <Icon className="spacer-icon" />
                  {label}
                </div>
              </Select.Option>
            );
          })}
        </Select>
        <Input.Search placeholder={"Search..."} allowClear />
      </div>
      <div>
        <Button
          icon={<QuestionCircleOutlined />}
          shape="circle"
          type="default"
          style={{ marginRight: 10 }}
        />
        <Button
          shape="circle"
          icon={<PlusCircleOutlined />}
          style={{ marginRight: 10 }}
        />
        <Button
          shape="circle"
          icon={<SettingOutlined />}
          style={{ marginRight: 10 }}
        />
      </div>
    </div>
  );
};

export default Spacer;
