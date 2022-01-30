import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import {
  SearchOutlined,
  UsergroupAddOutlined,
  AppstoreAddOutlined,
  MenuOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import './NavMenu.scss';

function NavMenu({ open, setOpen }) {
  return (
    <div className="topHeader">
      <div className="headerSearch">
        <div>
          <button
            type="button"
            style={{
              height: '30px',
              width: '30px',
              backgroundColor: 'white',
              border: 'none',
            }}
            onClick={() => setOpen(!open)}
          >
            {open ? <LeftOutlined /> : <MenuOutlined />}
          </button>
        </div>
        <Input
          placeholder="Search Jill's Party"
          style={{ width: '40%' }}
          suffix={<SearchOutlined className="headerButtonItems" />}
          size="small"
        />
        <div className="headerButtons">
          <Link to="/">
            <button
              type="button"
              className="headerButtonItems"
              icon={<AppstoreAddOutlined rotate={180} />}
            />
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="headerButtonItems"
              icon={<UsergroupAddOutlined />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
