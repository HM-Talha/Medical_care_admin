import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  fontBold: {
    fontWeight: 600,
  },
  root: {
    position: 'absolute',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    // alignItems:'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '35%',
    maxWidth: '500px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '24px',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#333333',
    fontFamily: 'Poppins',
    textAlign: 'center',
    alignSelf: 'center',
    marginRight: '10px',
  },
  closeIcon: {
    position: 'absolute',
    right: '5px',
    top: '5px',
  },
  submitButton: {
    // backgroundColor: '#333333',
    color: '#fff',
    marginTop: '30px',
    minHeight: '50px',
    minWidth: '30%',
    alignSelf: 'center',
  },
  inputRender: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: 8,
  },
  formDiv: {
    display: 'flex',
    flex: 1,
    padding: '8px',
    gap: '24px',
    justifyContent: 'space-evenly',
  },
}));
