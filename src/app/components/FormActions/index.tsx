import clsx from 'clsx';
import React from 'react';

import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  button: {
    height: 63,
  },
  submit: {
    width: 203,
    fontSize: 18,
  },
  cancel: {
    padding: '0px 42px',
    fontSize: 16,
  },
}));

type Props = {
  className?: any;
  showSubmit?: boolean;
  showCancel?: boolean;
  submitLabel?: string;
  cancelLabel?: string;
  type?: string;
  onSubmitClick?: (e: any) => void;
  onCancelClick?: (e: any) => void;
  cancelButtonClassName?: any;
  submitButtonClassName?: any;
  submitButtonColor?: string;
  cancelButtonColor?: string;
  loading?: boolean;
  disabledSubmit?: boolean;
  disableCancel?: boolean;
};

const FormActions = ({
  cancelButtonClassName = '',
  submitButtonClassName = '',
  className = '',
  showSubmit = true,
  showCancel = true,
  submitLabel = 'Save',
  cancelLabel = 'Cancel',
  type = 'submit',
  loading = false,
  onSubmitClick,
  onCancelClick,
  disableCancel = false,
  disabledSubmit = false,
}: Props) => {
  const styles = useStyles();
  return (
    <Box className={className}>
      {showCancel && (
        <Button
          disabled={disableCancel}
          className={clsx(styles.button, styles.cancel, cancelButtonClassName)}
          onClick={onCancelClick}
        >
          {cancelLabel}
        </Button>
      )}
      {showSubmit && (
        <>
          {' '}
          {type === 'submit' ? (
            <Button
              disabled={disabledSubmit}
              className={clsx(
                styles.button,
                styles.submit,
                submitButtonClassName,
              )}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              {submitLabel}
            </Button>
          ) : (
            <Button
              disabled={disabledSubmit}
              variant="contained"
              size="large"
              color="primary"
              type="button"
              onClick={onSubmitClick}
              className={clsx(
                styles.button,
                styles.submit,
                submitButtonClassName,
              )}
            >
              {submitLabel}
            </Button>
          )}
        </>
      )}
    </Box>
  );
};

export default FormActions;
