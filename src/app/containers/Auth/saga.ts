/**
 * Gets the repositories of the user from Github
 */

import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { LoginResponse } from "types/LoginResponse";
import { API_URL } from "utils/constants";
import { request } from "utils/request";

// import { request } from 'utils/request';
import {
  selectForgotEmail,
  selectLoginForm,
  selectResetPasswordForm,
} from "./selectors";
import { actions, logoutSuccess } from "./slice";
import { LoginErrorType } from "./types";

/**
 * Github repos request/response handler
 */

export function* resetPassword(action) {
  const token = action.payload?.token;
  console.log("forgot response tadsfa");
  yield delay(500);
  const { password } = yield select(selectResetPasswordForm);
  const options = {
    method: "POST",
    body: JSON.stringify({ token, password }),
  };
  try {
    const response = yield call(request, `${API_URL}/auth/password`, options);

    if (response && response.message !== "MESSAGES.AUTH.PASSWORD_UPDATED") {
      yield put(
        actions.updateResetForm({ name: "error", value: response.message })
      );
      return;
    }
    yield put(actions.resetPasswordSuccess());
    yield call(action?.payload?.callback);
    console.log(response, "reset password response");
  } catch (e) {
    console.log(e);
  }
}

export function* forgotPassword(action) {
  console.log("forgot response tadsfa");
  yield delay(500);
  const email = yield select(selectForgotEmail);
  const options = {
    method: "POST",
    body: JSON.stringify({ email }),
  };
  try {
    const response = yield call(request, `${API_URL}/auth/password`, options);

    if (
      response &&
      response.message !== "MESSAGES.AUTH.FORGOT_PASSWORD_MAIL_SENT"
    ) {
      yield put(actions.setForgotError(response.message));
      return;
    }
    yield put(actions.forgotPasswordSuccess());
    yield call(action?.payload?.callback);
    console.log(response, "forgot response");
  } catch (e) {
    console.log(e);
  }
}

export function* logoutRequest() {
  yield delay(500);
  yield localStorage.setItem("sessionToken", "");
  yield put(logoutSuccess());
}

export function* loginRequest(action) {
  yield delay(500);
  // Select email from store
  const form = yield select(selectLoginForm);
  if (form.email.value.length === 0) {
    yield put(actions.loginError(LoginErrorType.EMAIL_EMPTY));
    return;
  }
  if (form.password.value.length === 0) {
    yield put(actions.loginError(LoginErrorType.PASSWORD_EMPTY));
    return;
  }
  if (
    form.email.value == "admin@medicalcare.com" &&
    form.password.value == "1234"
  ) {
    yield localStorage.setItem("sessionToken", "token");
    yield localStorage.setItem("loginResponse", JSON.stringify({}));
    yield put(actions.loginSuccess({} as any));
    yield call(action.payload?.callback);
    return;
  } else {
    yield put(actions.loginError("Incorrect email and password"));
    return;
  }
  // const options = {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: form.email.value,
  //     password: form.password.value,
  //   }),
  // };
  // try {
  //   // Call our request helper (see 'utils/request')
  //   const response = yield request(`${API_URL}/auth/login`, options);
  //   console.log(response);

  //   if (response && response.message === 'LOGIN_FAILED') {
  //     yield put(actions.loginError('Incorrect email and password'));
  //     return false;
  //   }
  //   if (response && response.message !== 'MESSAGES.USER.LOGIN_SUCCESS') {
  //     yield put(actions.loginError(response.message));
  //     return false;
  //   }
  //   yield localStorage.setItem('sessionToken', response.token);
  //   yield localStorage.setItem('loginResponse', JSON.stringify(response));
  //   yield put(actions.loginSuccess(response));
  //   yield call(action.payload?.callback);
  // } catch (err: any) {
  //   console.log(err);
  // }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* userRepoSaga() {
  // Watches for LOAD_REPOS actions and calls loginResponse when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.login.type, loginRequest);
  yield takeLatest(actions.logout.type, logoutRequest);
  yield takeLatest(actions.forgotPassword.type, forgotPassword);
  yield takeLatest(actions.resetPassword.type, resetPassword);
}
