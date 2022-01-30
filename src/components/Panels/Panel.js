import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import './Panel.scss';
import {
  HolderOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import DataSources from './DataSources/DataSources';

function Panel({ item, flexBasis, position = '1 / 1 / 2 / 2' }) {
  const ref = useRef();
  const [, drag, preview] = useDrag(() => ({ type: 'panel', item }))
  const [, drop] = useDrop(() => ({
    accept: 'panel',
    drop: (droppedItem) => {
      if (droppedItem.id === item.id) return null;
      console.log('👉 | droppedItem', droppedItem);
      // if 3 is dropped on 1
      // place 3 ath the position of 1 and update the original data array
      return droppedItem;
    }
  }))

  const panelHeaderContent = (
    <div className="PanelHeaderContainer">
      <div className="PanelHeaderSubContainer1">
        <div ref={drag} className="headerButtonItems">
          <HolderOutlined role="button" />
        </div>
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
  drop(preview(ref));
  return (
    <div
      ref={ref}
      className="PanelContainer"
      style={{ gridArea: position }}
    >
      {panelHeaderContent}
      <DataSources dataSource={item?.dataSources} />
    </div>
  );
}

export default Panel;
