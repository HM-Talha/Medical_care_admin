import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { API_URL } from "utils/constants";
import { request } from "utils/request";
import { selectEditUser, selectQuery } from "./selector";
import { actions } from "./slice";
import { actions as dashboardActions } from "app/containers/Dashboard/slice";
import { UsersListItemType } from "../types";
import { getDefaultHeaders, removeBlankProperties } from "utils/helpers";
import queryString from "query-string";

export function* update(action) {
  const {
    firstName,
    lastName,
    // password,
    email,
    user_type,
    dob,
  } = yield select(selectEditUser);
  let user: any = {
    firstName: firstName.value,
    lastName: lastName.value,
    // mobileNumber: mobileNumber.value,
    email: email.value,
    user_type: user_type.value,
    dob: dob.value,
  };
  try {
    const options = {
      method: "PUT",
      headers: getDefaultHeaders(),
      body: JSON.stringify(user),
    };
    const response: UsersListItemType = yield request(
      `${API_URL}/users/${action?.payload.id}`,
      options
    );
    yield put(
      dashboardActions.toggleSnackbar({
        open: true,
        message: "Data updated successfully",
        variant: "success",
      })
    );
    // if (!response.email) yield put(actions.updateFailed(response))
    yield put(actions.updateSuccess(response));
    yield call(action?.payload?.callback);
    // if (response && response) {
    //   throw response?.message;
    // }
  } catch (e: any) {
    const message = JSON.parse(e.message)?.message;
    yield put(actions.updateFailed(message));
    yield put(
      dashboardActions.toggleSnackbar({
        open: true,
        message: "Something went wrong " + JSON.stringify(e),
        variant: "error",
      })
    );
    // yield put(
    //   dashboardActions.toggleSnackbar({
    //     open: true,
    //     message,
    //     variant: 'error',
    //   }),
    // );
    console.log(e, "something went wrong");
  }
}

export function* handleBlock(action) {
  try {
    const options = {
      method: "PATCH",
      headers: getDefaultHeaders(),
    };
    const response: UsersListItemType = yield request(
      `${API_URL}/users/${action?.payload}`,
      options
    );

    yield put(actions.handleBlockSuccess(response));
    yield put(
      dashboardActions.toggleSnackbar({
        open: true,
        message: "Data updated successfully",
        variant: "success",
      })
    );
  } catch (e: any) {
    const message = JSON.parse(e.message)?.message;
    yield put(actions.updateFailed(message));
    yield put(
      dashboardActions.toggleSnackbar({
        open: true,
        message: "Something went wrong " + JSON.stringify(e),
        variant: "error",
      })
    );
    // yield put(
    //   dashboardActions.toggleSnackbar({
    //     open: true,
    //     message,
    //     variant: 'error',
    //   }),
    // );
    console.log(e, "something went wrong");
  }
}

export function* create() {
  yield delay(500);
}

export function* getList(action) {
  yield delay(500);
  const query = yield select(selectQuery);
  const requestData = removeBlankProperties(query);
  const queries = queryString.stringify({
    ...requestData,
  });
  try {
    const options = {
      method: "GET",
      headers: getDefaultHeaders(),
    };
    const response = yield request(`${API_URL}/users?${queries}`, options);
    // const newResponse = response.items?.reduce((p, c, i) => [...p, { ...c, mobileNumber: '9876542', dob: '1997-06-21T11:24:11.000Z' }], [])
    // console.log(newResponse, 'newResponse')
    yield put(actions.getUsersListSuccess(response));
    console.log(response.items, "usersList here");
  } catch (e: any) {
    yield put(dashboardActions.openSnackbar(e?.message));
    console.log(e);
    yield put(
      dashboardActions.toggleSnackbar({
        open: true,
        message: "Something went wrong " + JSON.stringify(e),
        variant: "error",
      })
    );
  }
}

export function* getNextPage(action) {
  try {
    const options = {
      method: "GET",
      headers: getDefaultHeaders(),
    };
    if (action && action.payload) {
      const { q, distributorId, user_type, orderDirection, orderField } =
        yield select(selectQuery);
      const requestQuery = {
        ...(distributorId !== "" && {
          distributorId,
        }),
        ...(user_type !== "" && {
          user_type,
        }),
        ...(q !== "" && {
          q,
        }),
        ...(orderDirection !== "" && {
          orderDirection,
        }),
        ...(orderField !== "" && {
          orderField,
        }),
      };
      console.log(requestQuery);

      const queries = queryString.stringify({
        ...requestQuery,
      });
      const response = yield request(
        action?.payload + `${queries && "&" + queries}`,
        options
      );
      console.log(response, "next items here");
      yield put(actions.getNextPageItemsSuccess(response));
    }
  } catch (e) {
    console.log(e, "something went wrong");
    yield put(
      dashboardActions.toggleSnackbar({
        open: true,
        message: "Something went wrong " + JSON.stringify(e),
        variant: "error",
      })
    );
  }
}

export function* deleteRow() {}

export function* useUsersListSaga() {
  yield takeLatest(actions.getList.type, getList);
  yield takeLatest(actions.getNextPage.type, getNextPage);
  yield takeLatest(actions.create.type, create);
  yield takeLatest(actions.update.type, update);
  yield takeLatest(actions.delete.type, deleteRow);
  yield takeLatest(actions.handleBlock.type, handleBlock);
}
