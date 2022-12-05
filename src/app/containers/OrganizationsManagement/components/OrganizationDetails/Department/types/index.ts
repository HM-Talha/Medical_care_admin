import { FormElement } from "app/containers/types";

export interface ResponseError {
  message: string;
}
export type RequestError = ResponseError;

export type DepartmentListItemType = {
  departmentName: string;
  address: string | null;
  city: string | null;
  noEmployee: string | null;
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

export type departmentListStateType = {
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
    items: Array<DepartmentListItemType>;
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

export const UserState: departmentListStateType = {
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
        departmentName: "Department 1",
        address: "29 David Elazar",
        city: "Hod Hasharon",
        noEmployee: "20",
      },
      {
        departmentName: "Department 2",
        address: "29 David Elazar",
        city: "Hod Hasharon",
        noEmployee: "15",
      },
      {
        departmentName: "Department 1",
        address: "29 David Elazar",
        city: "Hod Hasharon",
        noEmployee: "20",
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

export type ContainerState = departmentListStateType;
