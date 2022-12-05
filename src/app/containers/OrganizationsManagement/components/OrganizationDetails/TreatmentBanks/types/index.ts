import { FormElement } from "app/containers/types";

export interface ResponseError {
  message: string;
}
export type RequestError = ResponseError;

export type TreatmentBanksListItemType = {
  dateAssigned: string;
  departmentName: string | null;
  individualTtype: string | null;
  groupTtype: string | null;
  mustIndividualTtype: string | null;
  mustGroupTtype: string | null;
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

export type treatmentBanksListStateType = {
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
    items: Array<TreatmentBanksListItemType>;
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

export const UserState: treatmentBanksListStateType = {
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
        dateAssigned: "10.02.2022",
        departmentName: "Department  2",
        individualTtype: "Dikur/Mosa/ (Hosen 2/ Hosen 3)/Rephsology",
        groupTtype: "Hosen 1/ Shtifa",
        mustIndividualTtype: "4",
        mustGroupTtype: "20",
      },
      {
        dateAssigned: "10.02.2022",
        departmentName: "Department  1",
        individualTtype: "Dikur/Mosa/Rephsology",
        groupTtype: "Sadna 1/ Sadna 2",
        mustIndividualTtype: " Dikur/Masa",
        mustGroupTtype: "Sadna 2 ",
      },
      {
        dateAssigned: "10.02.2022",
        departmentName: "Department  2",
        individualTtype: "Dikur/Mosa/ (Hosen 2/ Hosen 3)/Rephsology",
        groupTtype: "Hosen 1/ Shtifa",
        mustIndividualTtype: "4",
        mustGroupTtype: "20",
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

export type ContainerState = treatmentBanksListStateType;
