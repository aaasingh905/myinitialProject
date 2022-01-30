import React, { useMemo } from 'react';
import { Layout, Collapse } from 'antd';
import { Link } from 'react-router-dom';
import './sidebar.scss';
import AddPanel from './AddPanel';

const { Sider } = Layout;

const Marker = ({ color = 'white', fill = false }) => {
  const style = { borderColor: color };
  if (fill) style.backgroundColor = color;
  return <span className="sidebar-marker" style={style} />;
};

const ChildItem = ({ name, id, color, path }) => {
  return (
    <Link
      className="sidebar-items sidebar-items-child"
      key={id}
      to={`${path}/${id}`}
      onClick={() => {
        const root = document.documentElement;
        root.style.setProperty('--primary-theme-color', color);
      }}
    >
      <Marker color={color} fill />
      {name}
    </Link>
  );
};

const ParentItem = ({ name, id, color, children }) => {
  const path = `/panels/${id}`;
  const items = [
    <Link
      className="sidebar-items"
      key={id}
      to={path}
      onClick={() => {
        const root = document.documentElement;
        root.style.setProperty('--primary-theme-color', color);
      }}
    >
      <Marker color={color} fill={children?.length > 0 ? false : true} />
      {name}
    </Link>,
  ];
  if (children?.length) {
    items.push(children.map((childData) => ChildItem({ ...childData, path })));
  }
  return items;
};

const Sidebar = ({ panels }) => {
  const [showAddPanelButton, setShowAddPanelButton] = React.useState(true);
  const panelItems = useMemo(
    () =>
      panels
        .map(ParentItem)
        .reduce((panelArray, current) => [...panelArray, ...current], []),
    [panels]
  );
  const { Panel } = Collapse;

  function callback(key) {
    if (key?.length > 0) {
      setShowAddPanelButton(false);
    }
  }

  return (
    <Sider
      // breakpoint="sm"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{ background: '#F2F2F2', overflow: 'auto' }}
    >
      <div className="sidebar-items-wrapper">{panelItems}</div>
      <Collapse bordered={false} onChange={callback}>
        <Panel
          header={
            showAddPanelButton ? (
              <div
                style={{
                  color: '#CA2B1C',
                  textAlign: 'left',
                  paddingLeft: '10px',
                  marginTop: '15px',
                  fontWeight: 600,
                  fontSize: '12px',
                }}
              >
                + Add Panel
              </div>
            ) : (
              ''
            )
          }
          key="1"
          showArrow={false}
          style={{ background: '#f2f2f2' }}
        >
          <AddPanel
            showAddPanelButton={showAddPanelButton}
            setShowAddPanelButton={setShowAddPanelButton}
          />
        </Panel>
      </Collapse>
    </Sider>
  );
};

export default Sidebar;
