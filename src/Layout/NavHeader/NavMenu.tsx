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

type NavMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavMenu({ open, setOpen }: NavMenuProps) {
  const menuButtonCSS = {
    height: '30px',
    width: '30px',
    backgroundColor: 'white',
    border: 'none',
  };
  return (
    <div className="topHeader">
      <div className="headerSearch">
        <div>
          <button
            type="button"
            style={menuButtonCSS}
            onClick={() => setOpen(!open)}
          >
            {open ? <LeftOutlined /> : <MenuOutlined />}
          </button>
        </div>
        <Input
          placeholder="Search Jill's Party"
          style={{ width: '40%' }}
          suffix={<SearchOutlined className="headerButtonItems" />}
          size="middle"
        />
        <div className="headerButtons">
          <Link to="/">
            <button
              type="button"
              className="headerButtonItems"
              title="A"
              // icon={}
            >
              <AppstoreAddOutlined rotate={180} />
            </button>
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="headerButtonItems"
              title="A"
              // icon={}
            >
              <UsergroupAddOutlined />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
