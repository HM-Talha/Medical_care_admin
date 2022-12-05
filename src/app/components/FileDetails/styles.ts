import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#F7F7FA',
    border: '1px solid #D5D8DE',
    padding: '18px 16px',
    borderRadius: '5px',
  },
  detailsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  iconOuter: {
    width: 36,
    height: 36,
    backgroundColor: '#BDBDBD40',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconInnerContainer: {
    width: 32,
    height: 32,
    backgroundColor: '#BDBDBD',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameLabel: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#333",
  },
  sizeLabel: {
    fontSize: "10px",
    fontWeight: 400,
    color: "#929CB9"
  }
}));
