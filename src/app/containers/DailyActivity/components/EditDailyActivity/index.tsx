import {
  Button,
  Card, Grid, Modal,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEditUser,
  selectError,
  selectLoading
} from "../../redux/selector";
import { actions } from "../../redux/slice";
import { useStyles } from "./styles";
// import { validate } from './validator';

type Props = {
  open: boolean;
  handleClose: any;
};

const EditDailyActivity = (props: Props) => {
  const dispatch = useDispatch();
  const data = useSelector(selectEditUser);
  const styles = useStyles();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [openDate, setOpen] = useState<boolean>(false);
  const handleInputChange = (e) => {
    const { name, checked, type } = e.target;
    const key = `user.${name}`;
    const value = type === "checkbox" ? checked : e.target.value;
    dispatch(actions.updateFormValue({ key, value }));
  };

  console.log(data, "datadatadata");

  const onSuccess = () => {
    dispatch(actions.resetNewUserForm());
    props.handleClose();
  };

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card className={styles.addModal}>
        <div className={styles.modalContainer}>
          <Grid>
            <Typography align="center" className={styles.headerModal}>
              Edit Daily Activity
            </Typography>
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ padding: "20px 0px 50px 0px" }}
          >
            <Grid item xs={12}>
              <span className={styles.label}>Maditation name</span>
              <TextField
                margin="dense"
                variant="outlined"
                fullWidth
                required
                id="username"
                placeholder="Name 1"
                name="username"
                autoComplete={"off"}
                autoFocus
                className={styles.textEnabled}
              />
            </Grid>

            <Grid item md={12}>
              <label className={styles.label}>Maditation Description</label>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Description...."
                fullWidth
                className={styles.textEnabled}
              />
            </Grid>
            <Grid item xs={3}>
              <label className={styles.label}>Day</label>
              <TextField
                id="outlined-multiline-static"
                placeholder="1"
                fullWidth
                className={styles.textEnabled}
              />
            </Grid>
            <Grid item xs={3}>
              <label className={styles.label}>Time</label>
              <TextField
                id="outlined-multiline-static"
                placeholder="10:00"
                fullWidth
                className={styles.textEnabled}
              />
            </Grid>
          </Grid>

          <div>
            <Grid container spacing={3}>
              <Grid
                className={styles.btnContainer}
                container
                item
                xs={6}
                direction="column"
              >
                <Button
                  className={styles.cancelBtn}
                  variant="outlined"
                  onClick={props.handleClose}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid container item xs={6} direction="column">
                <Button className={styles.saveBtn} variant="contained">
                  Save
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </Card>
    </Modal>
  );
};

export default EditDailyActivity;
