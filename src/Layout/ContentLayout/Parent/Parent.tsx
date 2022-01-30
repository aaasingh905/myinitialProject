import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Panel from '../../../components/Panels/Panel';
import data from '../../../userData';
import './Parent.scss';
import { Child, Panel as PanelType } from '../../../Store/Reducers/UserReducer';
import { State } from '../../../Store/Reducers/Index';

type ParentProps = {
  panelId: string;
};

function Parent({ panelId }: ParentProps) {
  const [selectedElement, setSelectedElement] = useState<Child | PanelType>();
  const userData = useSelector((state: State) => state.user);
  const [zoom, setZoom] = useState(33);

  useEffect(() => {
    const parent = userData?.activePanels?.filter((ele) => {
      return ele.id === panelId;
    });
    setSelectedElement(parent);
  });

  // useEffect(() => {
  //  },[zoom])

  let childPanels;
  console.log(selectedElement?.children?.length);
  if (selectedElement?.children?.length > 1) {
    childPanels = selectedElement?.children?.map(
      (panel: { id: any }, index: any) => (
        <Panel key={panel.id} item={panel} flexBasis={zoom} />
      )
    );
  } else {
    childPanels = <Panel item={selectedElement} width="100%" />;
  }

  const setZoomProperty = (z: string) => {
    if (z === 'in') {
      // if(zoom<100){
      //     let a = zoomList.findIndex((ele)=> ele===zoom)
      //     console.log(a)
      // }
      if (zoom === 33) {
        if (selectedElement?.children?.length <= 2) {
          setZoom(99);
        } else {
          setZoom(49);
        }
      } else if (zoom === 49) {
        setZoom(99);
      }
    } else {
      // if(zoom>0){
      //     let a = zoomList.findIndex((ele)=> ele===zoom)
      if (zoom === 99) {
        setZoom(49);
      }
      if (zoom === 49) {
        setZoom(33);
      }
    }
  };
  return (
    <>
      <div className="ParentPanelContainer">{childPanels}</div>
      <div className="zoomButtonContainer">
        <Button
          type="link"
          className="buttonItems"
          disabled={zoom === 99 || selectedElement?.children?.length <= 1}
          onClick={() => setZoomProperty('in')}
        >
          <ZoomInOutlined />
        </Button>
        <Button
          type="link"
          className="buttonItems"
          disabled={zoom === 33 || selectedElement?.children?.length <= 1}
          onClick={() => setZoomProperty('out')}
        >
          <ZoomOutOutlined />
        </Button>
      </div>
    </>
  );
}

export default Parent;
