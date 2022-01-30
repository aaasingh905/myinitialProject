import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import data from '../userData';
import NavMenu from './NavHeader/NavMenu';
import Parent from './ContentLayout/Parent/Parent';
import Child from './ContentLayout/Child/Child';

const { Content } = Layout;

const MainLayout = () => {
  const { panels } = data;
  const [open, setOpen] = React.useState(true);
  const activePanels = panels.filter((ele) => ele.archived !== true);
  return (
    <Layout style={{ height: '100%' }}>
      {open && <Sidebar panels={activePanels} style={{ height: '100%' }} />}
      <Layout>
        <NavMenu setOpen={setOpen} open={open} />
        <Content style={{ background: '#fff' }}>
          <DndProvider backend={HTML5Backend}>
            <Route path="/panels/:panelId/:subpanelId?">
              <Comp />
            </Route>
          </DndProvider>
        </Content>
      </Layout>
    </Layout>
  );
};

const Comp = () => {
  const { panelId, subpanelId } = useParams();
  if (subpanelId) {
    return <Child subpanelId={subpanelId} panelId={panelId} />
  }
  return <Parent panelId={panelId} />
};

export default MainLayout;
