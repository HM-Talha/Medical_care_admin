import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { UserState } from '../types';

const selectDomain = (state: RootState) => state.patientsListState || UserState;

export const selectLoading = createSelector(
  [selectDomain],
  state => state.loading,
);
export const selectList = createSelector([selectDomain], state => state.list);
export const selectQuery = createSelector([selectDomain], state => state.query);
export const selectEditUser = createSelector(
  [selectDomain],
  state => state.form.user,
);
export const selectError = createSelector([selectDomain], state => state.error);
