import { LoginResponse } from 'types/LoginResponse';
import { createSlice } from 'utils/@reduxjs/toolkit';

import { createAction, PayloadAction } from '@reduxjs/toolkit';
import set from 'lodash/set';
import { ContainerState, LoginErrorType } from './types';
import { FormError } from '../types';

export const logoutSuccess = createAction('LOGOUT_SUCCESS');
// The initial state of the GithubRepoForm container
export const initialState: ContainerState = {
  email: '',
  password: '',
  loginForm: {
    email: {
      value: '',
    },
    password: {
      value: '',
    },
  },
  loading: false,
  error: null,
  token: localStorage.getItem('sessionToken') || '',
  forgotPasswordForm: {
    email: '',
    error: '',
  },
  resetForm: {
    password: '',
    confirm_password: '',
    error: '',
  },
};

const formSlice = createSlice({
  name: 'authState',
  initialState,
  extraReducers: builder => {
    builder.addCase(logoutSuccess, state => {
      state.token = '';
    });
  },
  reducers: {
    setForm: (state, action: PayloadAction<{ key: string; value: string }>) => {
      const { key, value } = action.payload;
      console.log(key, value);
      set(state, `${key}.value`, value);
      set(state, `${key}.error`, '');
    },
    setFormErrors(
      state,
      action: PayloadAction<{
        key: string;
        errors: Array<FormError>;
      }>,
    ) {
      // const { key } = action.payload;
      action.payload.errors.forEach(error => {
        set(state.loginForm, `${error.name}.error`, error.error);
      });
      // console.log(state.loginForm);
    },
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
      state.error = null;
    },
    changePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
      state.error = null;
    },
    logout(state) {},
    login(state, action: PayloadAction<{ callback: () => void }>) {
      state.loading = true;
      state.error = null;
    },
    forgotPassword(state, action: PayloadAction<{ callback: () => void }>) {
      state.loading = true;
    },
    loginSuccess(state, action: PayloadAction<LoginResponse>) {
      state.email = '';
      state.password = '';
      state.loading = false;
      state.error = null;
      state.token = action.payload.token;
    },
    loginError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    setForgotError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.forgotPasswordForm.error = action.payload;
    },
    setForgotEmail(state, action: PayloadAction<string>) {
      state.forgotPasswordForm.email = action.payload;
    },
    forgotPasswordSuccess(state) {
      state.loading = false;
    },
    resetError: state => {
      state.forgotPasswordForm.error = '';
    },
    resetEmail: state => {
      state.forgotPasswordForm.email = '';
    },
    updateResetForm: (
      state,
      action: PayloadAction<{ name: string; value: any }>,
    ) => {
      state.resetForm[action.payload.name] = action.payload.value;
    },
    resetPassword: (
      state,
      action: PayloadAction<{ token: any; callback: () => void }>,
    ) => {
      state.loading = true;
    },
    resetPasswordSuccess: state => {
      state.loading = false;
      state.resetForm.error = '';
      state.resetForm.password = '';
      state.resetForm.confirm_password = '';
    },
  },
});

export const { actions, reducer, name: sliceKey } = formSlice;
