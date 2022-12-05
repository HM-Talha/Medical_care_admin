import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Modal,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from './styles';
import InputField from 'app/components/InputField';
import { useSelector } from 'react-redux';
import {
  selectEditUser,
  selectError,
  selectLoading,
} from '../../redux/selector';
import { useDispatch } from 'react-redux';
import { getFormattedDateTime } from 'utils/helpers';
import Close from '@mui/icons-material/Close';
import { actions } from '../../redux/slice';
import DatePicker from 'app/components/DatePicker';
import { validate } from './validator';
import { FormError } from 'app/containers/types';

type Props = {
  open: boolean;
  handleClose: any;
};

const EditUserModal = (props: Props) => {
  const dispatch = useDispatch();
  const data = useSelector(selectEditUser);
  const styles = useStyles();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [openDate, setOpen] = useState<boolean>(false);
  const handleInputChange = e => {
    const { name, checked, type } = e.target;
    const key = `user.${name}`;
    const value = type === 'checkbox' ? checked : e.target.value;
    dispatch(actions.updateFormValue({ key, value }));
  };

  console.log(data, 'datadatadata');

  const onSuccess = () => {
    dispatch(actions.resetNewUserForm());
    props.handleClose();
  };

  const handleSubmit = () => {
    const errors: Array<FormError> = validate(data);
    if (errors.length > 0) {
      dispatch(actions.setFormErrors({ key: 'user', errors }));
      return;
    }
    dispatch(actions.update({ id: data.id.value, callback: onSuccess }));
  };

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.root}>
        <Box
          display="flex"
          // alignItems="center"
          // justifyContent={'space-between'}
          alignSelf={'center'}
        >
          <Typography className={styles.title}>{'Edit User'}</Typography>
          <IconButton
            sx={{ position: 'absolute', right: 10, top: 10 }}
            onClick={props.handleClose}
          >
            <Close />
          </IconButton>
        </Box>
        <Box>
          <Grid container columnSpacing={2}>
            <Grid item sm={12} lg={6}>
              <InputField
                labelFontWeight={600}
                isDisable={false}
                backgroundColor="#F7F7FA"
                size="small"
                lightPlaceholder={true}
                isEdit={true}
                defaultValue={data.firstName.value ?? '-'}
                label={'First Name'}
                name="firstName"
                onChange={handleInputChange}
                fullWidth={true}
              />
            </Grid>
            <Grid item sm={12} lg={6}>
              <InputField
                labelFontWeight={600}
                isDisable={false}
                backgroundColor="#F7F7FA"
                size="small"
                lightPlaceholder={true}
                name="lastName"
                onChange={handleInputChange}
                isEdit={true}
                defaultValue={data.lastName.value ?? '-'}
                label={'Last Name'}
                fullWidth={true}
              />
            </Grid>
            <Grid item sm={12} lg={6}>
              <InputField
                labelFontWeight={600}
                isDisable={false}
                backgroundColor="#F7F7FA"
                size="small"
                lightPlaceholder={true}
                isEdit={true}
                defaultValue={data.email.value ?? '-'}
                label={'Email'}
                error={data.email.error}
                fullWidth={true}
                name="email"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item sm={12} lg={6}>
              <Typography
                sx={{ mt: '10px', mb: '8px' }}
                className={styles.fontBold}
              >
                Date of Birth
              </Typography>
              <DatePicker
                label={''}
                open={openDate}
                onChange={date => {
                  const key = `user.dob`;
                  dispatch(actions.updateFormValue({ key, value: date }));
                }}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                value={data.dob.value}
              />
              {/* <InputField
              labelFontWeight={600}
                isDisable={false}
                backgroundColor="#F7F7FA"
                size="small"
                lightPlaceholder={true}
                isEdit={true}
                defaultValue={data.dob.value}
                label={'Date of birth'}
                fullWidth={true}
                name="dateOfBirth"
                onChange={handleInputChange}
              /> */}
            </Grid>
            <Grid item sm={12} lg={6}>
              <Box
                sx={{
                  py: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography className={styles.fontBold}>
                  Phone Number
                </Typography>
                <Typography>{data.mobileNumber.value || '-'}</Typography>
              </Box>
            </Grid>
            <Grid item sm={12} lg={6}>
              <Box
                sx={{
                  py: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography className={styles.fontBold}>
                  Creation Date
                </Typography>
                <Typography>
                  {getFormattedDateTime(data.createdAt.value, 'dd-MM-yyyy')}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} lg={6}>
              <Box
                sx={{
                  py: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography className={styles.fontBold}>IP address</Typography>
                <Typography>{data.mac.value ?? '-'}</Typography>
              </Box>
            </Grid>
            <Grid item sm={12} lg={6}>
              <Box
                sx={{
                  py: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography className={styles.fontBold}>Last Edited</Typography>
                <Typography>
                  {getFormattedDateTime(data.updatedAt.value, 'dd-MM-yyyy')}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} lg={6}>
              <Box
                sx={{
                  py: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography className={styles.fontBold}>Mac Address</Typography>
                <Typography>{data.mac.value ?? '-'}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {error && (
          <>
            <Alert severity="error">
              <Typography>{error}</Typography>
            </Alert>
          </>
        )}
        <Button
          variant="contained"
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          {loading ? <CircularProgress size={32} /> : `Save changes`}
        </Button>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
