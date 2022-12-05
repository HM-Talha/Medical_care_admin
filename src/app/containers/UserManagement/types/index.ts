import { FormElement } from "app/containers/types";

export interface ResponseError {
  message: string;
}
export type RequestError = ResponseError;

export type UserListItemType = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  mobileNumber: string | null;
  status: string | null;
  sex: string | null;
  email: string | null;
  address: string | null;
  city: string | null;
  country: string | null;
  registration: string | null;
  caregivers: string | null;
  caregiversNames: string | null;
  sensors: string | null;
  createdAt: string | null;
};

export interface NewUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  companyName: string;
  designation: any;
  numberOfEmployees: string;
  user_type: string;
  isActive: any;
}

export type NewUserResponse = {
  id: any;
  codeSentAt: any;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  countryCode: any;
  email: string;
  companyName: string;
  designation: string;
  numberOfEmployees: string;
  language: string;
  isActive: true;
  role: any;
  image: any;
  userType: string;
  createdAt: string;
  updatedAt: string;
  fullName: string;
  message?: string;
};

export type UserForm = {
  id: FormElement;
  firstName: FormElement;
  lastName: FormElement;
  email: FormElement;
  dob: FormElement;
  mobileNumber: FormElement;
  createdAt: FormElement;
  updatedAt: FormElement;
  ip: FormElement;
  mac: FormElement;
  user_type: FormElement;
};

export type UserStateType = {
  query: {
    limit: number;
    page: number;
    distributorId: string;
    user_type: string;
    q: string;
    orderField: string;
    orderDirection: string;
    createMin: string;
    createMax: string;
    updateMin: string;
    updateMax: string;
  };
  form: {
    user: UserForm;
  };
  list: {
    items: Array<UserListItemType>;
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    links: {
      first: string;
      last: string;
      previous: string;
      next: string;
    };
  };
  loading: boolean;
  error: string;
};

export const UserState: UserStateType = {
  query: {
    user_type: "",
    distributorId: "",
    limit: 10,
    page: 1,
    q: "",
    orderField: "",
    orderDirection: "",
    updateMax: "",
    updateMin: "",
    createMax: "",
    createMin: "",
  },
  list: {
    items: [
      {
        id: "1",
        address: "Test Adddress",
        city: "Test City",
        country: "Test Country",
        email: "medicalcare1@yopmail.com",
        firstName: "test name",
        lastName: "test last name",
        mobileNumber: "55512345678",
        registration: "18/09/2022",
        createdAt: "18/09/2022",
        caregivers: "2",
        caregiversNames: "Adel levi",
        sensors:"1",
        sex: "male",
        status: "Active",
      },
      {
        id: "2",
        address: "Test Adddress",
        city: "Test City",
        country: "Test Country",
        email: "medicalcare2@yopmail.com",
        firstName: "test name",
        lastName: "test last name",
        mobileNumber: "55512345678",
        registration: "18/09/2022",
        caregivers: "2",
        caregiversNames: "Maria Mizrahi",
        sensors:"2",
        sex: "male",
        status: "Freez",
        createdAt: "18/09/2022",
      },
      {
        id: "3",
        address: "Test Adddress",
        city: "Test City",
        country: "Test Country",
        email: "medicalcare3@yopmail.com",
        firstName: "test name",
        lastName: "test last name",
        mobileNumber: "55512345678",
        registration: "18/09/2022",
        caregivers: "2",
        caregiversNames: "Adel levi",
        sensors:"3",
        sex: "male",
        status: "Disabled",
        createdAt: "18/09/2022",
      },
      {
        id: "4",
        address: "Test Adddress",
        city: "Test City",
        country: "Test Country",
        email: "medicalcare4@yopmail.com",
        firstName: "test name",
        lastName: "test last name",
        mobileNumber: "55512345678",
        registration: "18/09/2022",
        caregivers: "2",
        caregiversNames: "Maria Mizrahi",
        sensors:"4",
        sex: "male",
        status: "Active",
        createdAt: "18/09/2022",
      },
    ],
    meta: {
      totalItems: 0,
      itemCount: 0,
      itemsPerPage: 100,
      totalPages: 1,
      currentPage: 1,
    },
    links: {
      first: "",
      previous: "",
      next: "",
      last: "",
    },
  },
  loading: false,
  form: {
    user: {
      id: { value: "" },
      firstName: { value: "" },
      lastName: { value: "" },
      mobileNumber: { value: "" },
      createdAt: { value: "" },
      dob: { value: "" },
      email: { value: "" },
      updatedAt: { value: "" },
      user_type: { value: "" },
      ip: { value: "" },
      mac: { value: "" },
    },
  },
  error: "",
};

export type ContainerState = UserStateType;
