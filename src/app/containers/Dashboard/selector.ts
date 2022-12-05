import { RootState } from 'types';

import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.dashboardState || initialState
export const selectMenuOpen = createSelector([selectDomain], state => state.menuOpen);
export const selectSnacbar = createSelector([selectDomain], state => state.snackbar);
export const selectDashboardStats = createSelector([selectDomain], state => state.stats);
export const selectDashboardGraphs = createSelector([selectDomain], state => state.graphs);
export const selectCurrentRoute = createSelector([selectDomain], state => state.currentRoute)
export const selectSearch = createSelector([selectDomain], state => state.search)