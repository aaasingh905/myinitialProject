import React from 'react';
import Gmail from './DataSource/Gmail';
import OneDrive from './DataSource/OneDrive';
import Outlook from './DataSource/Outlook';
import Slack from './DataSource/Slack';
// import { Sources } from './../../../Store/Reducers/UserReducer';

const DataSources = ({ dataSource }: any) => {
  return (
    <div>
      {/* {dataSources} */}
      {dataSource?.map((datasource: any) => {
        if (datasource.sourceId === 1) {
          return <Gmail key={`${datasource.sourceId}-${dataSource.order}`} />;
        }
        if (datasource.sourceId === 2) {
          return <Outlook key={`${datasource.sourceId}-${dataSource.order}`} />;
        }
        if (datasource.sourceId === 3) {
          return <Slack key={`${datasource.sourceId}-${dataSource.order}`} />;
        }
        if (datasource.sourceId === 4) {
          return (
            <OneDrive key={`${datasource.sourceId}-${dataSource.order}`} />
          );
        }
        return '';
      })}
    </div>
  );
};

export default DataSources;
