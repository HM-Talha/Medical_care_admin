import {
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './styles';

type Props = {
  title: string;
  body?: string;
  buttonText: string;
  open: boolean;
  handleClose: any;
  onSuccess?: any;
  loading?: boolean;
  entity?: string;
};

const DeleteModal = ({
  title,
  body,
  buttonText,
  open,
  handleClose,
  onSuccess,
  loading,
  entity
}: Props) => {
  const styles = useStyles();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.deleteDiv}>
        <Box className={styles.titleDiv}>
          {/* {!entity ? */}
          <Typography className={styles.title}>{title}
            {entity && <span className={styles.titleEntity}>{" "}{entity}</span>}?
          </Typography>

          {/* // : <><Typography className={styles.title}>{title}<span className={styles.titleEntity}>{' '}{entity}</span>?</Typography></> */}
          {/* } */}
          <IconButton
            className={styles.closeIcon}
            onClick={handleClose}
            disabled={loading}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <div className={styles.body}>
          {body && <Typography>{body}</Typography>}
        </div>
        <Button
          variant="contained"
          disabled={loading}
          onClick={onSuccess && onSuccess}
          className={styles.removeButton}
        >
          {loading ? <CircularProgress size={24} /> : buttonText}
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
