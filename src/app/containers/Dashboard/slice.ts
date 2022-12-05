import { PayloadAction } from '@reduxjs/toolkit';
import { SnackbarProp, SnackbarProps } from 'app/components/Snackbar';
import { createSlice } from 'utils/@reduxjs/toolkit';
import set from 'lodash/set';
import { InitialDashboardState } from './types';

export const initialState: InitialDashboardState = {
  menuOpen: true,
  loading: false,
  currentRoute: '',
  snackbar: {
    open: false,
    message: '',
    variant: 'success',
  },
  graphs: {
    loginGraph: [],
    salesGraph: [],
    serviceCallsGraph: [],
  },
  stats: {
    purchases: {
      open: 0,
      total: 0,
      close: 0,
    },
    changeRequests: {
      open: 0,
      total: 0,
      close: 0,
    },
    users: {
      total: 0,
      last24Hr: 0,
    },
    mobileUsers: {
      total: 0,
      monthCount: 0,
      countOf45Days: 0,
    },
    data: {
      purchases: {
        open: 0,
        total: 0,
        closed: 0,
      },
      changeRequests: {
        open: 0,
        total: 0,
        closed: 0,
      },
      users: {
        connected: 0,
        yesterday: 0,
      },
      appUsers: {
        total: 0,
        lastMonth: 0,
        newUsers: 0,
      },
    },
  },
  search: '',
};

export const useDashboardSlice = createSlice({
  name: 'dashboardState',
  initialState,
  reducers: {
    toggleMenu: state => {
      state.menuOpen = !state.menuOpen;
    },
    openSnackbar: (state, action: PayloadAction<string>) => {
      state.snackbar.open = true;
      state.snackbar.message = action.payload;
      state.snackbar.variant = 'error';
    },
    toggleSnackbar: (state, action: PayloadAction<SnackbarProp>) => {
      state.snackbar.open = action.payload.open || false;
      state.snackbar.message = action.payload.message || '';
      state.snackbar.variant = action.payload.variant || 'error';
    },
    closeSnackbar: state => {
      state.snackbar.open = false;
      state.snackbar.message = '';
    },
    getDashboardStats: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getDashboardStatsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.stats = action.payload.data;
    },
    setDashboardGraph: (state, action: PayloadAction<{ key; value }>) => {
      const { key, value } = action.payload;
      set(state.graphs, key, value);
    },
    setDashbaordStats: (state, action: PayloadAction<{ key; value }>) => {
      const { key, value } = action.payload;
      set(state.stats, key, value);
    },
    setRoute: (state = initialState, action) => {
      state.currentRoute = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { reducer, actions, name: sliceKey } = useDashboardSlice;
