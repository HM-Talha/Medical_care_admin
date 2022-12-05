import { FormError } from 'app/containers/types';
import { emailValidator } from 'utils/helpers';
import { UserForm } from '../../types';

export function validate(form: UserForm): Array<FormError> {
  const errors: Array<FormError> = [];
  if (!form.email.value) {
    errors.push({
      name: 'email',
      error: 'Email address is required',
    });
  }
  if (form.email.value && !emailValidator(form.email.value)) {
    errors.push({
      name: 'email',
      error: 'Invalid email address',
    });
  }
  return errors;
}
