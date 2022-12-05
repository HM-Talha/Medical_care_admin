/**
 * Homepage selectors
 */

import { RootState } from 'types';

import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

// TODO: Add an explanation for this
const selectDomain = (state: RootState) => state.authState || initialState;

export const selectToken = createSelector(
  [selectDomain],
  authState => authState.token,
);


export const selectLoginForm = createSelector(
  [selectDomain],
  authState => authState.loginForm,
);

export const selectLoading = createSelector(
  [selectDomain],
  authState => authState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  authState => authState.error,
);
export const selectForgotForm = createSelector([selectDomain], state => state.forgotPasswordForm);
export const selectResetPasswordForm = createSelector([selectDomain], state => state.resetForm);
export const selectForgotEmail = createSelector([selectDomain], state => state.forgotPasswordForm.email);
export const selectForgotError = createSelector([selectDomain], state => state.forgotPasswordForm.error);
export const selectErrorMessage = createSelector([selectDomain], state => state.error)