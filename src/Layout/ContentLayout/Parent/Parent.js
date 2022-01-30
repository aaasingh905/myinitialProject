import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Button } from 'antd';
import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import Panel from '../../../components/Panels/Panel';
import data from '../../../userData';
import './Parent.scss';

const MAX_COL_SIZE = 3;
const MIN_COL_SIZE = 1;

function Parent({ panelId }) {
  const [selectedElement, setSelectedElement] = useState({});
  const [noOfColumns, setNoOfColumns] = useState(1);
  const [noOfGrids, setNoOfGrids] = useState(1);

  const canZoomIn = useMemo(() => {
    if (!selectedElement?.children?.length) return false;
    if (noOfColumns === 1 && noOfGrids === 1) return false;
    return true;
  }, [noOfGrids, noOfColumns, selectedElement]);

  const canZoomOut = useMemo(() => {
    if (!selectedElement?.children?.length) return false;
    const { children = [] } = selectedElement;
    if (children.length === noOfColumns) return false;
    const noOfRows = Math.ceil(children.length / noOfColumns);
    if (noOfRows === noOfGrids) return false;
    if (noOfGrids === MAX_COL_SIZE && noOfColumns === MAX_COL_SIZE) return false;
    return true;
  }, [noOfColumns, noOfGrids, selectedElement]);

  const gridTemplateRows = useMemo(() => {
    if (!selectedElement?.children?.length) return 'none';
    const { children } = selectedElement;
    const proportion = Math.round(10000 / noOfGrids) / 100
    const noOfRows = Math.ceil(children.length / noOfColumns);
    return `${proportion - 1}% `.repeat(noOfRows);
  }, [noOfColumns, noOfGrids, selectedElement])

  useEffect(() => {
    const parent = data?.panels?.find((ele) => ele.id === panelId);
    setSelectedElement(parent);
  });

  const PanelList = useMemo(() => {
    if (!selectedElement?.children) return [];

    const { children } = selectedElement;
    if (!children?.length) return [<Panel item={selectedElement} />];

    const noOfLastColCells = (children.length % noOfColumns) || noOfColumns;
    const noOfRows = Math.ceil(children.length / noOfColumns);

    const position = (index) => {
      const row = Math.ceil(index / noOfColumns);
      const col = (index % noOfColumns) || noOfColumns;
      const height = row === (noOfRows - 1) && col > noOfLastColCells ? 2 : 1;
      return `${row} / ${col} / ${row + height} / ${col + 1}`
    }

    return children.map((panel, index) => (
      <Panel key={panel.id} item={panel} position={position(index + 1)} />
    ))
  }, [selectedElement?.children, noOfColumns]);

  const zoomIn = useCallback(() => {
    if (noOfColumns > MIN_COL_SIZE && noOfGrids === MIN_COL_SIZE)
      setNoOfColumns(noOfColumns - 1);
    else if (noOfColumns > MIN_COL_SIZE)
      setNoOfGrids(noOfGrids - 1);
  }, [noOfColumns, noOfGrids, setNoOfColumns, setNoOfGrids]);

  const zoomOut = useCallback(() => {
    if (noOfColumns < MAX_COL_SIZE)
      setNoOfColumns(noOfColumns + 1);
    if (noOfGrids < MAX_COL_SIZE && noOfColumns === MAX_COL_SIZE) {
      setNoOfGrids(noOfGrids + 1);
    }
  }, [noOfColumns, noOfGrids, setNoOfColumns, setNoOfGrids]);

  return (
    <div className="ParentPanelContainer" style={{ gridTemplateRows }}>
      {PanelList}
      <div className="zoomButtonContainer">
        <Button
          type="button"
          className="buttonItems"
          disabled={!canZoomIn}
          onClick={zoomIn}
        >
          <ZoomInOutlined />
        </Button>
        <Button
          type="button"
          className="buttonItems"
          disabled={!canZoomOut}
          onClick={zoomOut}
        >
          <ZoomOutOutlined />
        </Button>
      </div>
    </div>
  );
}

export default Parent;
