import React, { useState, useEffect } from 'react';
import Panel from '../../../components/Panels/Panel';
import data from '../../../userData';
import './Child.scss';

type ChildProps = {
  subpanelId: string;
  panelId: string;
};

function Child({ subpanelId, panelId }: ChildProps) {
  const [selectedElement, setSelectedElement] = useState({});

  useEffect(() => {
    const parent = data?.panels?.filter((ele) => {
      return ele.id === panelId;
    });
    const child = parent[0]?.children?.filter((ele) => {
      return ele.id === subpanelId;
    });
    setSelectedElement(child[0]);
  }, [panelId, subpanelId]);

  return (
    <div className="ChildPanelContainer">
      <Panel item={selectedElement} width="100%" />
    </div>
  );
}

export default Child;
