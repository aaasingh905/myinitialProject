import React from 'react';
import Gmail from './DataSource/Gmail';
import OneDrive from './DataSource/OneDrive';
import Outlook from './DataSource/Outlook';
import Slack from './DataSource/Slack';

function DataSources({ dataSource }) {
  return (
    <div>
      {/* {dataSources} */}
      {dataSource?.map((datasource) => {
        if (datasource.name === 'Gmail') {
          return <Gmail key={`${datasource.id}-${dataSource.name}`} />;
        }
        if (datasource.name === 'Outlook') {
          return <Outlook key={`${datasource.id}-${dataSource.name}`} />;
        }
        if (datasource.name === 'Slack') {
          return <Slack key={`${datasource.id}-${dataSource.name}`} />;
        }
        if (datasource.name === 'OneDrive') {
          return <OneDrive key={`${datasource.id}-${dataSource.name}`} />;
        }
        return '';
      })}
    </div>
  );
}

export default DataSources;
