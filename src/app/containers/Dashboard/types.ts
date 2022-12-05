import { AlertColor } from '@mui/material';

export interface DashboardState {
  menuOpen: boolean;
  loading: boolean;
  currentRoute: string;
  snackbar: {
    open: boolean;
    message: string;
    variant: AlertColor;
    translate?: boolean;
  };
  graphs: {
    loginGraph: Array<any>;
    salesGraph: Array<any>;
    serviceCallsGraph: Array<any>;
  };
  stats: {
    message?: 'MESSAGE.SUCCESS';
    purchases: {
      open: number;
      total: number;
      close: number;
    };
    changeRequests: {
      open: number;
      total: number;
      close: number;
    };
    users: {
      total: number;
      last24Hr: number;
    };
    mobileUsers: {
      total: number;
      monthCount: number;
      countOf45Days: number;
    };
    data: {
      purchases: {
        open: number;
        total: number;
        closed: number;
      };
      changeRequests: {
        open: number;
        total: number;
        closed: number;
      };
      users: {
        connected: number;
        yesterday: number;
      };
      appUsers: {
        total: number;
        lastMonth: number;
        newUsers: number;
      };
    };
  };
  search: string;
}

export type InitialDashboardState = DashboardState;
