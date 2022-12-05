import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#333333',
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginRight: '10px'
  },
  titleEntity: {
    fontSize: '24px',
    fontWeight: '700',
    color: 'red',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  titleDiv: {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    // backgroundColor: '#aba',
    // textAlign: 'center'
    maxWidth: '400px'
  },
  removeButton: {
    alignSelf: 'center', color: '#fff', padding: '10px 40px',
  },
  deleteDiv: {
    position: 'absolute',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // minWidth: '30%',
    minWidth: '500px',
    minHeight: '263px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '40px',
    boxShadow: '24px'
  },
  body: {
    color: '#C4C4C4',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    textAlign: 'center',
    margin: '30px 0px'
  },
  closeIcon: {
    position: 'absolute',
    right: '5px',
    top: '5px'
  }
}))