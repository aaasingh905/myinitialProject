import React from 'react';
import { Route, useParams } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import data from '../userData';
import NavMenu from './NavHeader/NavMenu';
import Parent from './ContentLayout/Parent/Parent';
import Child from './ContentLayout/Child/Child';
import { useSelector } from 'react-redux';
import { State } from '../Store/Reducers/Index';

const { Content } = Layout;

type ParentProps = {
  subpanelId: string;
  panelId: string;
};

const Comp = () => {
  const { panelId, subpanelId }: ParentProps = useParams();
  return panelId && !subpanelId ? (
    <Parent panelId={panelId} />
  ) : panelId && subpanelId ? (
    <Child subpanelId={subpanelId} panelId={panelId} />
  ) : (
    <div />
  );
};

const MainLayout = () => {
  // const { panels } = data;
  const [open, setOpen] = React.useState(true);
  const activePanels = useSelector((state: State) => state.user.activePanels);
  console.log(activePanels);
  return (
    <Layout style={{ height: '100%' }}>
      {open && <Sidebar panels={activePanels} style={{ height: '100%' }} />}
      <Layout>
        <NavMenu setOpen={setOpen} open={open} />
        <Content style={{ background: '#fff' }}>
          <Route path="/panels/:panelId/:subpanelId?">
            <Comp />
          </Route>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
