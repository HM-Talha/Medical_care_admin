import { FormElement } from "../types";
export type LoginForm = {
  email: FormElement,
  password: FormElement,
}
/* --- STATE --- */
export interface AuthState {
  email: string;
  password: string;
  loading: boolean;
  error?: LoginErrorType | any;
  loginForm: LoginForm,
  token: string;
  forgotPasswordForm: {
    email: string,
    error: string,
  },
  resetForm: {
    password: string,
    confirm_password: string,
    error: string,
  }
}

export enum LoginErrorType {
  EMAIL_EMPTY = 10,
  PASSWORD_EMPTY = 20,
  USER_NOT_FOUND = 404,
  SUCCESS = 200,
  UNAUTHORIZED = 400,
  ERROR = 500,
  NO_PERMISSIONS = 401,
}

/*
  If you want to use 'ContainerState' keyword everywhere in your feature folder,
  instead of the 'HomePageState' keyword.
*/
export type ContainerState = AuthState;
