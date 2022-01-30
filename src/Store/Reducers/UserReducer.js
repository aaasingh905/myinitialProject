const user = {
  name: 'Anurag',
  username: 'asingh',
  email: 'asingh@radicleinc.com',
  token: 'abcdfefcdhvh5673ejnh3g',
  permissions: {},
  panels: [
    {
      name: 'Security Audit',
      id: 'p1',
      archived: false,
      color: '#206FA8',
      url: '/panels/p1',
      dataSources: [
        { id: 'sgh', name: 'Gmail' },
        { id: 'sgh', name: 'OneDrive' },
        { id: 'sgh', name: 'Slack' },
        { id: 'sgh', name: 'Outlook' },
        { id: 'sgh', name: 'Drive' },
      ],
      children: [
        {
          name: 'Secure Frame',
          id: 'cd1',
          pId: 'pd1',
          archived: false,
          color: '#206FA8',
          url: '/panels/pd1/subpanel/cd1',
          dataSources: [
            { id: 'sgh', name: 'Gmail' },
            { id: 'sgh', name: 'OneDrive' },
          ],
        },
        {
          name: "Internal Comm's",
          id: 'cd',
          pId: 'pd',
          archived: false,
          color: '#206FA8',
          url: '/panels/pd/subpanel/cd',
          dataSources: [
            { id: 'sgh', name: 'Gmail' },
            { id: 'sgh', name: 'Slack' },
          ],
        },
      ],
    },
    {
      name: "Jill's Party",
      id: 'p2',
      archived: false,
      color: '#fda658',
      url: '/panels/p2',
      dataSources: [],
      children: [
        {
          name: 'Caterers',
          id: 'c1',
          pId: 'p2',
          archived: false,
          color: '#fda658',
          url: '/panels/p2/subpanel/c1',
          dataSources: [
            { id: 'sgh', name: 'Gmail' },
            { id: 'sgh', name: 'OneDrive' },
          ],
        },
        {
          name: 'Music',
          id: 'c2',
          pId: 'p2',
          archived: false,
          color: '#fda658',
          url: '/panels/p2/subpanel/c2',
          dataSources: [
            { id: 'sgh', name: 'Gmail' },
            { id: 'sgh', name: 'Slack' },
          ],
        },

        {
          name: 'River Boat Company',
          id: 'c3',
          pId: 'p2',
          archived: false,
          color: '#fda658',
          url: '/panels/p2/subpanel/c3',
          dataSources: [
            { id: 'sgh', name: 'Slack' },
            { id: 'sgh', name: 'OneDrive' },
          ],
        },
        {
          name: 'River Boat Company 22',
          id: 'c3',
          pId: 'p2',
          archived: false,
          color: '#fda658',
          url: '/panels/p2/subpanel/c3',
          dataSources: [
            { id: 'sgh', name: 'Slack' },
            { id: 'sgh', name: 'OneDrive' },
          ],
        },
        {
          name: 'River Boat Company 11',
          id: 'c3',
          pId: 'p2',
          archived: false,
          color: '#fda658',
          url: '/panels/p2/subpanel/c3',
          dataSources: [
            { id: 'sgh', name: 'Slack' },
            { id: 'sgh', name: 'OneDrive' },
          ],
        },
      ],
    },
    {
      name: "Timmy's Soccer Registration",
      id: 'p3',
      archived: false,
      color: '#E13525',
      url: '/panels/p3',
      dataSources: [
        { id: 'sgh', name: 'Gmail' },
        { id: 'sgh', name: 'OneDrive' },
        { id: 'sgh', name: 'Slack' },
        { id: 'sgh', name: 'Outlook' },
        { id: 'sgh', name: 'Drive' },
      ],
      children: [],
    },
    {
      name: 'Product Endorsements',
      id: 'pc3',
      archived: false,
      color: '#94AA55',
      url: '/panels/pc3',
      dataSources: [
        { id: 'sgh', name: 'Gmail' },
        { id: 'sgh', name: 'OneDrive' },
        { id: 'sgh', name: 'Slack' },
        { id: 'sgh', name: 'Outlook' },
        { id: 'sgh', name: 'Drive' },
      ],
      children: [],
    },
    {
      name: 'New PR Campaign',
      id: 'pg3',
      archived: false,
      color: '#6949AA',
      url: '/panels/pg3',
      dataSources: [
        { id: 'sgh', name: 'Gmail' },
        { id: 'sgh', name: 'OneDrive' },
        { id: 'sgh', name: 'Slack' },
        { id: 'sgh', name: 'Outlook' },
        { id: 'sgh', name: 'Drive' },
      ],
      children: [],
    },
    {
      name: 'Design Dir Candidate Interviews',
      id: 'pf3',
      archived: false,
      color: '#3FA5BC',
      url: '/panels/pf3',
      dataSources: [
        { id: 'sgh', name: 'Gmail' },
        { id: 'sgh', name: 'OneDrive' },
        { id: 'sgh', name: 'Slack' },
        { id: 'sgh', name: 'Outlook' },
        { id: 'sgh', name: 'Drive' },
      ],
      children: [],
    },

    {
      name: 'Home New Porch',
      id: 'p4',
      archived: false,
      color: '#0E446F',
      url: '/panels/p4',
      dataSources: [
        { id: 'sgh', name: 'Gmail' },
        { id: 'sgh', name: 'OneDrive' },
        { id: 'sgh', name: 'Slack' },
        { id: 'sgh', name: 'Outlook' },
        { id: 'sgh', name: 'Drive' },
      ],
      children: [],
    },
    {
      name: 'First',
      id: 'p11',
      archived: true,
      color: 'skyblue',
      url: '/panels/p11',
      dataSources: [
        { id: 'sgh', name: 'Gmail' },
        { id: 'sgh', name: 'OneDrive' },
        { id: 'sgh', name: 'Slack' },
        { id: 'sgh', name: 'Outlook' },
        { id: 'sgh', name: 'Drive' },
      ],
      children: [],
    },
    {
      name: 'First',
      id: 'p12',
      archived: true,
      color: 'darkblue',
      url: '/panels/p12',
      dataSources: [],
      children: [
        {
          name: 'Child11',
          id: 'c11',
          pId: 'p12',
          archived: true,
          color: 'darkblue',
          url: '/panels/p12/subpanel/c11',
          dataSources: [
            { id: 'sgh', name: 'Gmail' },
            { id: 'sgh', name: 'OneDrive' },
          ],
        },
        {
          name: 'Child12',
          id: 'c12',
          pId: 'p12',
          archived: true,
          color: 'darkblue',
          url: '/panels/p12/subpanel/c12',
          dataSources: [
            { id: 'sgh', name: 'Gmail' },
            { id: 'sgh', name: 'Slack' },
          ],
        },
        {
          name: 'Child13',
          id: 'c13',
          pId: 'p12',
          archived: true,
          color: 'darkblue',
          url: '/panels/p12/subpanel/c13',
          dataSources: [
            { id: 'sgh', name: 'Slack' },
            { id: 'sgh', name: 'OneDrive' },
          ],
        },
      ],
    },
  ],
};

const userReducer = (action, state = user) => {
  switch (action.type) {
    case 'AddPanel':
      return state;
    default:
      return state;
  }
};

export default userReducer;
