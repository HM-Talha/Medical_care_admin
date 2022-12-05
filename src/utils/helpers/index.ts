import { format } from 'date-fns';
import { DateTime } from 'luxon';
import { EDIT_USER_ROLES, UserTypeEnum } from 'utils/UserType.enum';

export const handleChange = (event, state, stateUpdater) => {
  const { name, value } = event.target;

  if (typeof state === 'object') {
    stateUpdater({ ...state, [name]: value });
  } else {
    stateUpdater(value);
  }
};

export const emailValidator = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const getFormattedDateTime = (
  date: any,
  format: string = 'dd-MM-yyyy, hh:mm a',
) => {
  if (!date) {
    return '-';
  }
  return DateTime.fromISO(date).toFormat(format);
};

export const getDefaultHeaders = () => {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
  };
};

export const removeBlankProperties = (obj: object) => {
  return JSON.parse(JSON.stringify(obj, replaceUndefinedOrNull));
};

export function replaceUndefinedOrNull(key, value) {
  if (value === null || value === undefined || value === '') {
    return undefined;
  }

  return value;
}

/**
 * returns logged in user is
 * @param
 */

export function formatDuration(duration) {
  if (parseFloat(duration) > 0) {
    return (parseFloat(duration) / 60).toFixed(2) + ' min';
  }
  return '-';
}
export function formatBytes(bytes, decimals = 2) {
  if (bytes == 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  console.log({ i })

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export const dateFormatter = unformattedDate => {
  if (!unformattedDate) {
    return '-';
  }
  let formatDate = new Date(unformattedDate);
  const newDate = format(formatDate, 'dd/MM/yyyy');
  return newDate;
};

export const truncate = (str, lmt?) => {
  return str.length > lmt ?? 20
    ? str.substring(0, lmt ? lmt - 5 : 15) + '...'
    : str;
};
