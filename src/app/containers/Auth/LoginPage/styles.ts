import { LOGIN_HEADER_HEIGHT } from "utils/constants";

import { Theme } from "@mui/material";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

import DotColor from "./assets/login-dot-color.svg";
import Dot from "./assets/login-dot.svg";

export const useLgStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    position: "relative",
  
  },
  main: {
    display: "flex",
    justifyContent: "space-around",
    // backgroundColor:'#aba',
    height: "100vh",

    // margin: 33,
    // height: `calc(100vh - ${LOGIN_HEADER_HEIGHT}px)`,
  },
  welcomToText: {
    fontWeight: 600,
    fontSize: 56,
    lineHeight: "65px",
    color: "#EDAC15",
  },
  MedicalCareText: {
    fontWeight: "400",
    fontSize: "26px",
    lineHeight: "140%",
    color: "#2A3333",
    fontFamily: "Cairo",
    fontStyle: "Regular",
    verticalAlign: "top",
    width: '105%',
  },
  subText: {
    fontSize: 18,
    fontWeight: 400,
  },
  copyRightText: {
    position: "absolute",
    bottom: 15,
    fontSize: 14,
    color: "#00000062",
    left: "50%",

    transform: "translate(-50%, 0)",
  },
  right: {
    // flex: 1,
    // minHeight: 309,
    // backgroundColor: '#aba',
    background: "#F5F9F9",
    padding: "26px 40px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  
  leftMain:{
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    paddingBottom:"5rem",
  },
  left: {
   // padding: "26px 21px",
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
  },
  loginButtonWrapper: {
    position: "relative",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    background: "#C66078",
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  logo: {
    position: "absolute",
    left: 40,
    top: 50,
  },
  loginImage: {
   
    
    width: "380px",
   // height: "171px",
    // paddingTop:'20px',
    // marginTop:80,
    // bottom:'0%',
    // position:'absolute'
  },
  loginTexts: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "90%",
    textAlign: "left",
  },
  form: {
    display: "flex",
    alignSelf: "center",
    width: "20%", 
    background:"#D1D1D1"
  },
  error: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  keepSignedin: {
    marginTop: 26,
  },
  submit: {
    marginTop: 26,
    width: "100%",
    height: 56,
    fontSize: 22,
    fontWeight: 500,
    borderRadius: 5,
  },
  languageSwitch: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  email: {
    marginTop: 0,
    marginBottom: 23,
    borderRadius: 5,
  },
  password: {
    margin: 0,
    borderRadius: 5,
  },
  labelKeepSignedIn: {
    fontSize: 16,
    fontWeight: 400,
  },
  wrapper: {
    position: "relative",
  },
  phoneIcon: {
    position: "absolute",
    top: -18,
    right: -45,
  },
  backToLogin: {
    fontSize: 18,
    color: "#FF923D",
    marginTop: 10,
  },
  image: {
    width: "inherit",
    height: "100vh",
  },
}));
