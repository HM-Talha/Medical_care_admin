import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
      mainContainer: {
        background: "#F5F9F9",
        minHeight: "100%",
        minWidth: "100%",
        position: "absolute",
        bottom: "auto",
      },
      root: {
        padding: "40px 30px 30px 300px",
        marginTop: "70px",
      },
      btnDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        
      },
      addBtn: {
        fontSize: 14,
        color: "#333333",
        border: "1px solid #D5D8DE",
        fontFamily: "Cairo",
        fontWeight: "400",
      },
      saveBtn: {
        background: "#C66078",
        color: "#ffff",
        "&:hover": {
          background: "#C66078",
        },
        fontFamily: "Cairo",
        fontWeight: 700,
        fontSize: "16px",
        width: "160px",
        height: "50px",
        borderRadius:4

      },
      cancelBtn: {
        color: "#C66078",
        borderColor: "#C66078",
        "&:hover": {
          borderColor: "#C66078",
        },
        fontFamily: "Cairo",
        fontWeight: 700,
        fontSize: "16px",
        width: "160px",
        height: "50px",
        borderRadius:4
      },
      btnContainer: {
        display: "flex",
        alignItems: "flex-end",
        
      },
      headerModal: {
        color: "#387E8D",
        fontFamily: "Cairo",
        fontWeight: "800",
        fontSize: "24px",
      },
      modalContainer: {
        padding: "25px",
        
      },
      addModal: {
        position: "absolute",
        background: "#F5F9F9",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // border: "0px",
        boxShadow: "0",
        zIndex: "9999",
        // width: "1000px",
        // flex:1,
        display:"flex"
        
      },
      textFieldStyle: {
        width: "200px",
        marginRight:15,
        backgroundColor:'white',
        "& label": {
          marginBottom: "15px",
        },
        "& .css-jd1zyo-MuiSelect-select-MuiInputBase-input-MuiInput-input.MuiSelect-select":
          {
            background: "white",
            border: "1px solid #D1D1D1",
            borderRadius: "5px",
            height: "30px",
            marginTop: "8px",
            padding: "5px",
          },
        "& .css-175axk8-MuiInputBase-root-MuiInput-root:before, & .css-175axk8-MuiInputBase-root-MuiInput-root:after":
          {
            border: "none",
          },
      },
      label: {
        fontFamily: "Cairo",
        fontWeight: 400,
        fontSize: "16px",
        color:"#2A3333",
      },
      textEnabled: {
        background: "#FFF",
        width: "100%"
      },
      mainHeader: {
        display: "flex",
        alignItems: "center",
        // marginTop: "100px",
        marginBottom:'20px'
      },
      textHeaderT: {
        color: "#387E8D",
        fontWeight: "600px",
        fontSize: "16px",
        lineHeight: "29.98px",
      },
      imgClass: {
        height: 20,
        width: 20,
        cursor: 'pointer',
        
      },
      textHeader: {
        color: "#2A3333",
        marginLeft: "14px",
        fontWeight: "600px",
        fontSize: "16px",
        lineHeight: "29.98px",
        fontStyle: "Semibold",
      },
}))