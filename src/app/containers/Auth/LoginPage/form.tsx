// import { TextField } from 'app/components/TextField';
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Theme,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import { selectError, selectLoading, selectLoginForm } from "../selectors";
import { actions } from "../slice";
import { LoginErrorType } from "../types";
import { validate } from "./validator";
const useStyles = makeStyles((theme: Theme) => ({
  loginButtonWrapper: {},
  signUpWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // fontFamily: 'Roboto',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "30px",
    color: "#333333",
  },
  signUpText: {
    marginLeft: "8px",
    color: "skyblue",
    textDecoration: "underline",
    fontWeight: "bold",
    cursor: "pointer",
    // fontFamily: 'Roboto',
  },
  loginText: {
    fontFamily: "Cairo",
    fontStyle: "Mixed",
    fontSize: "32px",
    fontweight: "500",
    verticalAlign: "top",
    color: "#2A3333",
    marginLeft: "30px",
    paddingBottom: "12px",
    letterSpacing: "3%",
  },

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  form: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  keepSignedin: {
    marginTop: 0,
    "& .MuiFormControlLabel-root": {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  submit: {
    background: "linear-gradient(135deg, #C66078 0%, #C66078 100%)",
    width: "385px",
    height: "56px",
    fontSize: "16px",
    fontFamily: "Cairo",
    fontStyle: "bold",
    lineHeight: "30px",
    fontWeight: 700,
    borderRadius: "4px",
    color: "#FFFFFF",
  },
  languageSwitch: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  email: {
    marginTop: 0,
    marginBottom: 23,
    borderRadius: "4px",
    "& input:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0 30px #F7F7FA inset !important",
      backgroundColor: "transparent",
      backgroundImage: "none !important",
      color: "#000000 !important",
    },
    "& .MuiFormControl-root": {},
    "& .MuiOutlinedInput-input": {},
    "& .MuiOutlinedInput-root": {
      width: "385px",
      height: "56px",
      borderColor: "coral",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "6px",
    },
  },
  password: {
    margin: 0,
    borderRadius: "4px",
    "& input:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0 30px #F7F7FA inset !important",
      backgroundColor: "transparent",
      backgroundImage: "none !important",
      color: "#000000 !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "4px",
    },
    "& .MuiFormControl-root": {},
    "& .MuiOutlinedInput-input": {},
    "& .MuiOutlinedInput-root": {
      width: "385px",
      height: "56px",
    },
  },
  labelKeepSignedIn: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Poppins",
    marginLeft: "5px",
  },
  dontHaveAccountText: {
    // fontFamily: 'Roboto',
  },
  phoneIcon: {
    position: "absolute",
    top: -18,
    right: -45,
  },
  forgotPassword: {
    color: "#387E8D",
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: 400,
    fontFamily: "Cairo",
    textDecoration: "underline",
  },
  textWrapper: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    margin: "5px auto 24px",
  },
  copyRightText: {
    fontSize: 14,
    color: "#00000062",
    textAlign: "center",
    position: "absolute",
  },
}));

export function LoginForm({ className }) {
  const classes = useStyles();
  const form = useSelector(selectLoginForm);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const { t } = useTranslation();
  // const user = localStorage.getItem('loginResponse');
  const [visible, setVisible] = useState(false);
  interface State {
    password: string;
    showPassword: boolean;
  }
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
  });
  const onLoginSuccess = () => {
    navigate("/organizations");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, "===", value);
    dispatch(actions.setForm({ key: `loginForm.${name}`, value }));
  };

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    try {
      /* istanbul ignore next  */
      evt?.preventDefault();
      setErrorMsg("");
      const errors = validate(form);
      if (errors.length > 0) {
        dispatch(actions.setFormErrors({ key: "loginForm", errors }));
        return;
      }

      dispatch(actions.login({ callback: onLoginSuccess }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log("useEffect :", form);
    if (error) setErrorMsg(error);
    // eslint-disable-next-line
  }, [error]);

  const errorText = errorMsg;
  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };
  return (
    <form className={classes.form} noValidate onSubmit={onSubmitForm}>
      {errorText && (
        <Alert className={classes.error} severity="error">
          {errorText}
        </Alert>
      )}
      <Box width={450} mt={1}>
        <Typography className={classes.loginText} gutterBottom>
          Welcome to{" "}
          <span
            style={{ color: "#6C7A7A", fontSize: "42px", fontWeight: "800" }}
          >
            in
          </span>
          <span
            style={{ color: "#49B1A8", fontSize: "42px", fontWeight: "800" }}
          >
            Heal
          </span>
        </Typography>
      </Box>
      <div dir="ltr" style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          placeholder="Email"
          name="email"
          autoComplete={"off"}
          error={!!form.email.error}
          helperText={form.email?.error}
          autoFocus
          value={form.email.value}
          onChange={onChange}
          className={classes.email}
        />
        <TextField
          id="outlined-adornment-password"
          name="password"
          placeholder="Password"
          type={values.showPassword ? "text" : "password"}
          value={form.password.value}
          onChange={onChange}
          error={!!form.password.error}
          helperText={form.password?.error}
          autoComplete={"off"}
          className={classes.password}
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       <IconButton
          //         aria-label="toggle password visibility"
          //         onClick={handleClickShowPassword}
          //         edge="end"
          //       >
          //         {values.showPassword ? <Visibility /> : <VisibilityOff />}
          //       </IconButton>
          //     </InputAdornment>
          //   ),
          // }}
        ></TextField>
        <Box sx={{ margin: "5px 0 24px" }}>
          {/* <FormControlLabel
          sx={{ mb: 0, ml: 0 }}
          control={<Checkbox sx={{ p: 0, mr: 0 }} />}
          label={
            <Typography className={classes.labelKeepSignedIn} component="span">
              Remember me
            </Typography>
          }
        /> */}
          <Link to="/login/forgot-password" className={classes.forgotPassword}>
            Forgot Password
          </Link>
        </Box>
      </div>
      {/* <Box className={classes.keepSignedin}>
      </Box> */}
      <div className={classes.loginButtonWrapper}>
        <Button
          variant="contained"
          // color="#FAA61A"
          className={classes.submit}
          // disabled={isLoading}
          type="submit"
        >
          {isLoading ? (
            <CircularProgress size={24} className={classes.buttonProgress} />
          ) : (
            t("login.button_text")
          )}
        </Button>
      </div>
      {/* <Box className={classes.signUpWrapper}>
        <Typography className={classes.dontHaveAccountText}>
          Don't have an account yet?
        </Typography>
        <Typography className={classes.signUpText}>SIGN UP</Typography>
      </Box> */}
    </form>
  );
}

export const loginError = (error: LoginErrorType | undefined | null) => {
  if (!error) return null;
  switch (error) {
    case LoginErrorType.ERROR:
      return {
        message: "An error has occurred! 😞",
        email: true,
        password: true,
      };
    case LoginErrorType.EMAIL_EMPTY:
      return { message: "Please enter email", email: true };
    case LoginErrorType.PASSWORD_EMPTY:
      return { message: "Please enter password", password: true };
    default:
      return { message: error, password: true, email: true };
  }
};
export default LoginForm;
