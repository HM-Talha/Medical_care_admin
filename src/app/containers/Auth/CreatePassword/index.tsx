import { TextField } from 'app/components/TextField';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Lock, LockReset } from '@mui/icons-material';
import { Button, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

import { selectResetPasswordForm } from '../selectors';
import { actions } from '../slice';
import ThankYou from './components/Thankyou';

type Props = {}

const useStyles = makeStyles(() => ({
  heading: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    color: '#000',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 40,
    fontSize: 22,
    marginTop: 11,
  },
  icon: {
    width: 48,
    height: 48,
    color: '#B2B2B2',
    transform: 'rotateY(180deg)',
    margin: "16px 0px 14px 0px",
  },
  input: {
    marginTop: 24,
  }
}))

const CreatePassword = (props: Props) => {
  const styles = useStyles();
  const [isUpdated, setIsUpdated] = useState(false);
  const { password, confirm_password, error } = useSelector(selectResetPasswordForm);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  console.log(searchParams.get('token'))

  const onSuccess = () => {
    setIsUpdated(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.resetPassword({ token: searchParams.get('token'), callback: onSuccess }))
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(actions.updateResetForm({ name, value }))
  }

  const resetPassword = <form className={styles.form} onSubmit={handleSubmit}>
    <Box mb={2} className={styles.heading}>
      Create Password
    </Box >
    <LockReset className={styles.icon} />
    <div dir="ltr">
      <TextField
        height={51}
        variant="outlined"
        margin="normal"
        required
        type='password'
        fullWidth
        id="password"
        placeholder='New Password'
        name="password"
        autoComplete="password"
        value={password}
        autoFocus
        InputProps={{
          endAdornment: <InputAdornment position="end">
            <Lock />
          </InputAdornment>
        }}
        onChange={onChange}
      />
      <TextField
        height={51}
        variant="outlined"
        margin="normal"
        type='password'
        required
        fullWidth
        id="confirmPassword"
        placeholder='Confirm Password'
        name="confirm_password"
        autoComplete="confirmPassword"
        className={styles.input}
        error={confirm_password !== password}
        helperText={password && confirm_password && confirm_password !== password ? `Password & confirm password doesn't match` : ""}
        InputProps={{
          endAdornment: <InputAdornment position="end">
            <Lock />
          </InputAdornment>
        }}
        value={confirm_password}
        onChange={onChange}
      />
    </div>
    <Button type='submit' disabled={(!password && !confirm_password) || password !== confirm_password} className={styles.button} variant='contained' color='secondary'>
      Set Password
    </Button>
  </form>

  return !isUpdated ? resetPassword : <ThankYou />
}

export default CreatePassword