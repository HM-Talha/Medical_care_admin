import { AuthState } from 'app/containers/Auth/types';
import { DashboardState } from 'app/containers/Dashboard/types';
import { UserStateType } from 'app/containers/UserManagement/types';
import { ThemeState } from 'styles/theme/types';
import { PushNotificationsStateType } from 'app/containers/Notifications/types';
import { organizationsListStateType } from 'app/containers/OrganizationsManagement/types';
import { dailyUpdateListStateType } from 'app/containers/DailyActivity/types';
import { contactListStateType } from 'app/containers/OrganizationsManagement/components/OrganizationDetails/Contacts/types';
import { PatientsListStateType } from 'app/containers/PatientsList/types';
import { calenderListStateType } from 'app/containers/TimeSlots/Components/ListView/types';
import { treatmentBanksListStateType } from 'app/containers/OrganizationsManagement/components/OrganizationDetails/TreatmentBanks/types';
import { departmentListStateType } from 'app/containers/OrganizationsManagement/components/OrganizationDetails/Department/types';
import { groupTreatmentStateType } from 'app/containers/OrganizationsManagement/components/GroupTreatment/GroupTreatmentType/types';
import { individualTreatmentStateType } from 'app/containers/OrganizationsManagement/components/GroupTreatment/IndividualTreatmentType/types';
import { UsersListStateType } from 'app/containers/Users/types';
import { timeSlotActionsListStateType } from 'app/containers/TimeSlots/Components/TimeSlotActions/types';
import { addTreatmentStateType } from 'app/containers/TreatmentTypes/Components/AddTreatment/types';
import { TreatmentTypeStateType } from 'app/containers/TreatmentTypes/types';

// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life.
  So, not available always
*/
export interface RootState {
  theme: ThemeState;
  authState: AuthState;
  dashboardState?: DashboardState;
  userState?: UserStateType;
  organizationListState?:organizationsListStateType;
  dailyUpdateListState?:dailyUpdateListStateType;
  contactListState?:contactListStateType;
  groupTreatmentState?:groupTreatmentStateType
  individualTreatmentState?:individualTreatmentStateType;
  departmentListState?:departmentListStateType;
  treatmentBanksListState?:treatmentBanksListStateType;
  pushnotificationsState?:PushNotificationsStateType;
  patientsListState?:PatientsListStateType
  usersListState?: UsersListStateType;
  calenderListState?:calenderListStateType;
  timeSlotActionsState?:timeSlotActionsListStateType;
  addTreatmentStateType: addTreatmentStateType;
  treatmentTypeState: TreatmentTypeStateType

  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
