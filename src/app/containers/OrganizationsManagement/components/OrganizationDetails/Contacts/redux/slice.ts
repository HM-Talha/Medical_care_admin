import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "utils/@reduxjs/toolkit";
import { ContactListItemType, UserState } from "../types";
import set from "lodash/set";
import { FormError } from "app/containers/types";

const initialState = UserState;

export const ContactListSlice = createSlice({
  name: "contactListState",
  initialState,
  reducers: {
    editUser: (state, action: PayloadAction<ContactListItemType>) => {
      // state.form.user.id.value = action.payload.id;
      // state.form.user.firstName.value = action.payload.firstName;
      // state.form.user.lastName.value = action.payload.lastName;
      // state.form.user.email.value = action.payload.email;
      // state.form.user.mobileNumber.value = action.payload.mobileNumber;
      // state.form.user.createdAt.value = action.payload.createdAt;
      // state.form.user.updatedAt.value = action.payload.updatedAt;
      // state.form.user.user_type.value = action.payload.role;
      // state.form.user.dob.value = action.payload.dob;
      // state.form.user.mac.value = action.payload.mac;
      // state.form.user.ip.value = action.payload.ip;
    },
    removeUser: (state) => {
      const editUser: any = {};
      editUser.firstName = "";
      editUser.lastName = "";
      editUser.email = "";
      editUser.phoneNumber = "";
      editUser.creationDate = null;
      editUser.dateOfBirth = null;
    },
    create: (state, action) => {
      state.loading = true;
    },
    createSuccess: (state) => {
      state.loading = false;
      state.form.user = initialState.form.user;
    },
    getList: (state) => {
      state.loading = true;
    },
    getUserById: (state, action: PayloadAction<{ id: any }>) => {
      state.loading = true;
    },

    getUsersListSuccess: (
      state,
      action: PayloadAction<{ items: []; links: any; meta: any }>
    ) => {
      state.loading = false;
      state.list.items = action.payload.items;
      state.list.meta = action.payload.meta;
      state.list.links = action.payload.links;
    },
    getNextPage: (state, action: PayloadAction<any>) => {
      console.log(action.payload, "action.payload get next page");
      // state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    update: (
      state,
      action: PayloadAction<{ id: any; callback: () => void }>
    ) => {
      state.error = "";
      state.loading = true;
    },
    updateFormValue: (
      state,
      action: PayloadAction<{ key: string; value: any }>
    ) => {
      set(state.form, `${action.payload.key}.value`, action.payload.value);
      set(state.form, `${action.payload.key}.error`, null);
      state.error = "";
    },
    updateSuccess(state, action: PayloadAction<ContactListItemType>) {
      state.loading = false;
      // // const index = state.list.items.findIndex(
      // //   (item) => item.id === action.payload.id
      // // );
      // if (index >= 0) {
      //   state.list.items[index] = action.payload;
      // }
    },
    updateFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    delete: (state) => {
      state.error = "";
      state.loading = true;
    },
    deleteSuccess: (state) => {
      state.loading = false;
      state.error = "";
    },
    deleteFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    resetNewUserForm(state) {
      state.error = "";
      state.form = initialState.form;
    },
    setFormErrors(
      state,
      action: PayloadAction<{
        key: string;
        errors: FormError[];
      }>
    ) {
      action.payload.errors.forEach((error) => {
        set(
          state.form,
          `${action.payload.key}.${error.name}.error`,
          error.error
        );
      });
    },
    getNextPageItems: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getNextPageItemsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.list.items = state.list.items.concat(action.payload.items);
      state.list.meta.currentPage = action.payload.meta.currentPage;
      state.list.links = action.payload.links;
      state.query.page = action.payload.meta.currentPage;
    },
    setQuery: (state, action: PayloadAction<{ name: string; value: any }>) => {
      const { name, value } = action.payload;
      state.query.page = 1;
      state.list = initialState.list;
      set(state.query, name, value);
    },
    resetModule: (state) => {
      state = initialState;
    },
    handleBlock: (state, action: PayloadAction<string>) => {},
    handleBlockSuccess: (state, action: PayloadAction<ContactListItemType>) => {
      // const index = state.list.items.findIndex(
      //   (u) => u.id == action.payload.id
      // );
      // if (index > -1) {
      //   // state.list.items[index].isActive = action.payload.isActive;
      //   // state.list.items[index].updatedAt = action.payload.updatedAt;
      // }
    },
  },
});

export const { reducer, actions, name: sliceKey } = ContactListSlice;
