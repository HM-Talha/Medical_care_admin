/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { AuthPage } from "./containers/Auth";
import { userRepoSaga } from "./containers/Auth/saga";
import { reducer, sliceKey } from "./containers/Auth/slice";
import React, { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";

import CreatePassword from "./containers/Auth/CreatePassword";
// import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
// import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
// import { IconButton } from '@mui/material';
import ForgotPassword from "./containers/Auth/ForgotPassword/ForgotPassword";
import LoginForm from "./containers/Auth/LoginPage/form";
import ResetPassword from "./containers/Auth/ResetPassword";
import PrivateRoute from "../utils/PrivateRoute";
import DashboardPage from "./containers/Dashboard";
import DashboardHome from "./containers/Dashboard/components/Home";
import Settings from "./containers/Settings";
import { UserManagement } from "./containers/UserManagement/Loadable";
import Notifications from "./containers/Notifications";
import NotificationDetails from "./containers/Notifications/components/NotificationDetails";
import OrganizationsManagement from "./containers/OrganizationsManagement";
import { selectDirection, themeActions } from "../styles/theme/slice";
import OrganizationDetails from "./containers/OrganizationsManagement/components/OrganizationDetails";
import GroupTreatment from "./containers/OrganizationsManagement/components/GroupTreatment";
import DailyActivity from "./containers/DailyActivity";
import { UnsupportedScreen } from "./containers/UnsupportedScreen";
import useWindowDimensions from "utils/hooks/useWindowDimensions";
import TimeSlots from "./containers/TimeSlots";
import PatientsList from "./containers/PatientsList";
import Users from "./containers/Users";
import UserDetails from "./containers/UserDetails";
import PatientsDetail from "./containers/PatientsDetail/index";
import UserGroup from "./containers/UserGroup";
import TimeSlotActions from "./containers/TimeSlots/Components/TimeSlotActions";
import ScrollToTop from "app/components/ScrollToTop";
import AddUser from "./containers/AddUser";
import UserGroupDetails from "./containers/UserGroupDetails";
import AssignedTreatment from "./containers/AssignedTreament";
import PatientsDetailsEditAssign from "./containers/PatientsDetailEdit";
import PatientsDetailsQuestionarries from "./containers/PatientDetailQuestionarries";
import PatientsDetailsQuestionarriesEdit from "./containers/PatientDetailsQuestinnariesEdit";
import TreatmentTypes from "./containers/TreatmentTypes";
import AddTreatment from "./containers/TreatmentTypes/Components/AddTreatment";
import Questionnaires from "./containers/Questionnaires";
import AddQuestionnaires from "./containers/AddQuestionnaire";
import QuestionnairDetail from "./containers/QuestionnairDetail";
import QuestionnairResult from "./containers/QuestionnaireResult";
import QuestionnairResultDetail from "./containers/QuestionnaireResultDetail";
export function App() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: userRepoSaga });

  const { width } = useWindowDimensions();
  const direction = useSelector(selectDirection);
  const dispatch = useDispatch();

  const selectedLanguage = useMemo(() => {
    return {
      language: localStorage.getItem("i18nextLng"),
      direction,
    };
  }, [direction]);

  const toggleDirection = () => {
    dispatch(themeActions.toggleDirection());
  };

  useEffect(() => {
    if (selectedLanguage) {
      if (
        selectedLanguage.language === "hw" &&
        selectedLanguage.direction !== "rtl"
      ) {
        toggleDirection();
      }
      if (
        selectedLanguage.language === "en" &&
        selectedLanguage.direction !== "ltr"
      ) {
        toggleDirection();
      }
    }
    // eslint-disable-next-line
  }, [selectedLanguage]);
  {
    /*
width && width >= 1280 ?
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
              : <UnsupportedScreen />
            */
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Helmet titleTemplate="%s - Medical Care" defaultTitle="Medical Care">
        <meta name="description" content="A Medical Care application" />
      </Helmet>
      <div dir={direction}>
        {width && width >= 1440 ? (
          <Routes>
            <Route path="/login/*" element={<AuthPage />}>
              <Route index element={<LoginForm className="" />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="create-password" element={<CreatePassword />} />
            </Route>
            <Route path="organizations" element={<OrganizationsManagement />} />
            <Route
              path="organizations/organization-details"
              element={<OrganizationDetails />}
            />
            <Route path="daily-activity" element={<DailyActivity />} />
            <Route
              path="organizations/organization-details/add-group-treatment"
              element={<GroupTreatment />}
            />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="push-notification" element={<Notifications />} />
            <Route
              path="notifications/notification-details"
              element={<NotificationDetails />}
            />
            <Route path="time-slots" element={<TimeSlots />} />
            <Route
              path="time-slots/time-slots-actions"
              element={<TimeSlotActions />}
            />
            <Route path="patients-list" element={<PatientsList />} />
            <Route
              path="/patients-list/patients-detail"
              element={<PatientsDetail />}
            />
            <Route
              path="/patients-list/patient-details-edit"
              element={<PatientsDetailsEditAssign />}
            />
            <Route
              path="/patients-details-questionarries"
              element={<PatientsDetailsQuestionarries />}
            />
            <Route
              path="/patients-details-questionarries-edit"
              element={<PatientsDetailsQuestionarriesEdit />}
            />
            <Route path="/questionnaires" element={<Questionnaires />} />
            <Route
              path="/questionnaires/add-questionaire"
              element={<AddQuestionnaires />}
            />
            <Route
              path="/questionnaires/questionnair-detail"
              element={<QuestionnairDetail />}
            />
            <Route
              path="/questionnaires-result"
              element={<QuestionnairResult />}
            />
            <Route
              path="/questionnaires-result/questionnaires-result-detail"
              element={<QuestionnairResultDetail />}
            />
            <Route path="assigned-treatment" element={<AssignedTreatment />} />

            <Route path="users-list" element={<Users />} />
            <Route path="users-list/users-details" element={<UserDetails />} />
            <Route path="users-group" element={<UserGroup />} />
            <Route path="add-user" element={<AddUser />} />
            <Route
              path="users-group/user-group-details"
              element={<UserGroupDetails />}
            />
            <Route
              path="treatment-types"
              element={<TreatmentTypes />}
            />
             <Route
              path="treatment-types/add-treatment"
              element={<AddTreatment />}
            />

            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            >
              <Route index element={<DashboardHome />} />
              <Route path="settings" element={<Settings />}></Route>
            </Route>
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <UnsupportedScreen />
        )}
      </div>
    </BrowserRouter>
  );
}
