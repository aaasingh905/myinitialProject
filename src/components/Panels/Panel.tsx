import React from 'react';
import './Panel.scss';
import {
  HolderOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import DataSources from './DataSources/DataSources';

function Panel({ item, flexBasis }: any) {
  const panelHeaderContent = (
    <div className="PanelHeaderContainer">
      <div className="PanelHeaderSubContainer1">
        <button type="button" className="headerButtonItems">
          <HolderOutlined role="button" />
        </button>
        <span className="PanelName">{item?.name}</span>
      </div>
      <div className="PanelHeaderSubContainer2">
        <button
          type="button"
          className="headerButtonItems"
          style={{ color: '#CA2B1C', fontWeight: 600, fontSize: '12px' }}
        >
          + Add/Edit a source
        </button>
        <button type="button" className="headerButtonItems">
          <SettingOutlined role="button" />
        </button>
        <button type="button" className="headerButtonItems">
          <QuestionCircleOutlined role="button" />
        </button>
      </div>
    </div>
  );
  return (
    <div
      className="PanelContainer"
      style={{ flexBasis: `${flexBasis}%`, height: `${flexBasis}%` }}
    >
      {panelHeaderContent}
      <DataSources dataSource={item?.dataSources} />
    </div>
  );
}

export default Panel;
