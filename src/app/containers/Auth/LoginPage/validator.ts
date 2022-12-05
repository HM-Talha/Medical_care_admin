import { FormError } from 'app/containers/types';
import { LoginForm } from '../types';

export function validate(form: LoginForm): Array<FormError> {
  const errors: Array<FormError> = [];
  if (!form.email.value) {
    errors.push({
      name: 'email',
      error: "Email can't be blank",
    });
  }
  if (!form.password.value) {
    errors.push({
      name: 'password',
      error: "Password can't be blank",
    });
  }

  return errors;
}
