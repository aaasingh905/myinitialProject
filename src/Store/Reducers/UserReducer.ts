export interface Show {
  from: boolean;
  date: boolean;
  to: boolean;
  subject: boolean;
}

export interface Widget {
  type:string,
  data:any
}

export interface Size {
  minSize: boolean;
  maxSize: boolean;
  value: number;
  unit: string;
}

export interface EmailFilters {
  to: string;
  from: string;
  hasTheWords: string;
  subject: string;
  size: Size;
  date:Date;
  hasAttachment: boolean;
  dontHasWords: string;
}

export interface SlackFilters {
  workspace: string;
  chanels: string;
  directMessages: string;
}

export interface Source {
  sourceId: number;
  order?: number;
  email: string[];
  filters: EmailFilters[] | SlackFilters[];
}

export interface EmailPanelSetting {
  maxLinesPerEmail?: number;
  maxEmailViewedPerFilter?: number;
  maxEmailCapacityPerFilter?: number;
  fontSize?: string;
  show?: Show;
}

export interface StoragePanelSetting {
  autoSize: boolean;
  maxFoldersPerChannel?: number;
  maxFilesPerChannel?: number;
}

export interface Child {
  name: string;
  id: string;
  pId: string;
  standalone: boolean;
  order: number;
  active: boolean;
  color: string;
  panelSettings: EmailPanelSetting[] | StoragePanelSetting[];
  sources: Source[];
  children:[]
}

export interface Panel {
  name: string;
  id: string;
  standalone: boolean;
  color: string;
  order: number;
  active: boolean;
  sources: Source[];
  panelSettings: EmailPanelSetting[] | StoragePanelSetting[];
  children: Child[];
}

export interface Accessibility {
  zoom:number;
  animationsEmoji: boolean;
}

export interface LanguageTimeZone {
  language:string;
  timezone:string;
  setAsDefault: boolean;
}

export interface GlobalSettings {
  accessibility: Accessibility;
  languageTimeZone: LanguageTimeZone;
}

export interface Subscription {
  type:string;
  Expiration: string;
}

export interface User {
  name: string;
  username: string;
  userId: string;
  email: string;
  token: string;
  subscription: Subscription;
  widgets: Widget[];
  globalSettings: GlobalSettings;
  activePanels: Panel[];
  archivedPanels: Panel[];
}

export interface Actions {
  type: string,
  payload: any
}

const user = {
  name: 'Anurag',
  username: 'asingh',
  userId: '2323',
  email: 'asingh@radicleinc.com',
  token: 'abcdfefcdhvh5673ejnh3g',
  subscription: {
    type: 'xyz',
    Expiration: '12-12-2022',
  },
  widgets: [{ type: 'calender', data: 'Hi' }],
  globalSettings: {
    accessibility: {
      zoom: 100,
      animationsEmoji: true,
    },
    languageTimeZone: {
      language: 'en',
      timezone: '',
      setAsDefault: true,
    },
  },
  activePanels: [
    {
      name: 'Security Audit',
      id: 'p1',
      standalone: false,
      color: '#206FA8',
      order: 1,
      active: true,
      sources: [],
      panelSettings: [{}],
      children: [{
        name: 'Secure Frame',
        id: 'cd1',
        pId: 'pd1',
        standalone: false,
        order: 1,
        active: true,
        color: '#206FA8',
        panelSettings: [
          {
            maxLinesPerEmail: 3,
            autoSize: true,
            maxEmailViewedPerFilter: 5,
            maxEmailCapacityPerFilter: 60,
            fontSize: '14px',
            show: {
              from: true,
              date: true,
              to: true,
              subject: true,
            },
          },
          {
            maxLinesPerEmail: 3,
            autoSize: true,
            maxEmailViewedPerFilter: 5,
            maxEmailCapacityPerFilter: 60,
            fontSize: '14px',
            show: {
              from: true,
              date: true,
              to: true,
              subject: true,
            },
          },
        ],
        sources: [
          {
            sourceId: 1, order: 1, email: ['abc@user.com'], filters: [{}],
          },
          {
            sourceId: 2, order: 2, email: ['abc@user.com'], filters: [{}],
          },
        ],
      },
      {
        name: 'Internal Comms',
        id: 'cd',
        pId: 'pd',
        standalone: false,
        order: 2,
        active: true,
        color: '#206FA8',
        panelSettings: [{
          maxLinesPerEmail: 3,
          autoSize: true,
          maxEmailViewedPerFilter: 5,
          maxEmailCapacityPerFilter: 60,
          fontSize: '14px',
          show: {
            from: true,
            date: true,
            to: true,
            subject: true,
          },
        },
        {
          maxFoldersPerChannel: 3,
          autoSize: true,
          maxFilesPerChannel: 20,
        },
        ],
        sources: [
          {
            sourceId: 1, order: 1, email: ['abc@user.com'], filters: [{}],
          },
          {
            sourceId: 3, order: 2, email: ['abc@user.com'], filters: [{}],
          },
        ],
      }],
    },
    {
      name: 'Home New Porch',
      id: 'p4',
      standalone: true,
      color: 'orange',
      order: 2,
      active: true,
      panelSettings: [
        {
          maxLinesPerEmail: 3,
          autoSize: true,
          maxEmailViewedPerFilter: 5,
          maxEmailCapacityPerFilter: 60,
          fontSize: '14px',
          show: {
            from: true,
            date: true,
            to: true,
            subject: true,
          },
        },
        {
          maxLinesPerEmail: 3,
          autoSize: true,
          maxEmailViewedPerFilter: 5,
          maxEmailCapacityPerFilter: 60,
          fontSize: '14px',
          show: {
            from: true,
            date: true,
            to: true,
            subject: true,
          },
        },
        {
          maxFoldersPerChannel: 3,
          autoSize: true,
          maxFilesPerChannel: 20,
        },
        {
          maxFoldersPerChannel: 3,
          autoSize: true,
          maxFilesPerChannel: 20,
        },
      ],
      sources: [
        {
          sourceId: 1, order: 1, email: ['abc@user.com'], filters: [{}],
        },
        {
          sourceId: 2, order: 2, email: ['abc@user.com'], filters: [{}],
        },
        {
          sourceId: 3, order: 3, email: ['abc@user.com'], filters: [{}],
        },
        {
          sourceId: 4, order: 4, email: ['abc@user.com'], filters: [{}],
        },
      ],
      children: [],
    },

  ],
  archivedPanels: [
    {
      name: 'First',
      id: 'p11',
      standalone: true,
      order: 1,
      active: false,
      color: 'skyblue',
      panelSettings: [{}],
      sources: [
        { sourceId: 1, email: ['abc@user.com'], filters: [{}] },
        { sourceId: 2, email: ['abc@user.com'], filters: [{}] },
        { sourceId: 3, email: ['abc@user.com'], filters: [{}] },
        { sourceId: 4, email: ['abc@user.com'], filters: [{}] },
      ],
      children: [],
    },
  ],
};

// eslint-disable-next-line default-param-last
const userReducer = (state = user, action:Actions) => {
  switch (action.type) {
    case 'AddPanel':
      return state;
    default:
      return state;
  }
};

export default userReducer;
