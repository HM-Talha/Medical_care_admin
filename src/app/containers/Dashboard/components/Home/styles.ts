import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  pagePadding: {
    marginLeft: 0,
    marginRight: 0
  },
  pageSpacing: {
    paddingLeft: theme.spacing(5.3),
    paddingRight: theme.spacing(5.3)
  },
  container: {
    marginTop: 23.85,
  },
  itemChild: {
    paddingBottom: "18px",
    color: '#FFF',
  },
  itemChildRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 19,
  },
  itemTitle: {
    fontWeight: 700,
    fontSize: 20,
    textAlign: 'right'
  },
  itemCount: {
    fontSize: 25,
    fontWeight: 700,
  },
  dashboardItemTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '12px',
    color: '#FFF',
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'Roboto',
    borderBottom: '1px solid #FFF'
  },
  heading: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: '23.44px',
  },
  borderBottom: {
    paddingTop: 16,
    borderBottom: '1px solid #FFF',
    paddingBottom: 18
  },
  itemContainer: {
    padding: '19px 18px 0px 18px'
  },
  chartContainer: {
    marginTop: 52
  },
  chartItemContainer: {
    padding: "38px 40px 38px 28px",
    "&:hover": {
      boxShadow: "0px 7px 15px rgba(0, 0, 0, 0.05)",
    }
  },
  statsHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  statsTitle: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: '38px',
    color: '#3C4858'
  },
  statsDate: {
    fontSize: 16,
    color: '#666666',
    marginLeft: 24,
    cursor: 'pointer'
  },
  chartHeading: {
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 32,
  },
  dashboardPageHeading: {
    fontSize: 32,
    fontWeight: 700,
    color: '#3C4858'
  },
  itemStyle: {
    margin: "0px 24px 0px 0px"
  },
  itemSmallStyle: {
    margin: "24px"
  }
}))