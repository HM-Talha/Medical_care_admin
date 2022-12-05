import DatePicker from 'app/components/DatePicker';
import Page from 'app/components/Page';
import PageHeading from 'app/components/PageHeading';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Box,
  Container,
  Grid,
  IconButton,
  Popover,
  Typography,
  Zoom,
} from '@mui/material';

import checklist from './assets/checklist.png';
import DateButton from './assets/DateButton';
import people from './assets/people.png';
import RefreshButton from './assets/RefreshButton';
import request from './assets/request.png';
import userApp from './assets/user-app.png';
import CustomChart from './components/chart';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../slice';
import { selectDashboardGraphs, selectDashboardStats } from '../../selector';
import { getFormattedDateTime } from 'utils/helpers';
import DateRangePicker from 'app/components/DateRangePicker';

type Props = {};

const DashboardItem = ({
  icon,
  ml,
  child,
  heading,
  subHeading,
  bg,
  index,
  data,
}) => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Zoom in={true} style={{ transitionDelay: `${index * 200}ms` }}>
        <Box borderRadius={'7px'} minHeight={248} bgcolor={bg} m={1.5}>
          <div className={styles.itemContainer}>
            <Box className={styles.dashboardItemTitle}>
              <Box display={'flex'} flexDirection="column">
                <Typography className={styles.heading}>
                  {t(`dashboard.${heading}`)}
                </Typography>
                <Typography className={styles.heading}>
                  {t(`dashboard.${subHeading}`)}
                </Typography>
              </Box>
              <img src={icon} alt={`ic-${heading}`} />
            </Box>
            <Box className={styles.itemChild}>
              {child &&
                child.map((c, ci) => {
                  return (
                    <Box
                      className={clsx(
                        styles.itemChildRow,
                        ci !== child.length - 1 ? styles.borderBottom : '',
                      )}
                      key={`dashboard-child-${heading}-${ci}`}
                    >
                      <Typography className={styles.itemCount}>
                        {data[c?.key]}
                      </Typography>
                      <Typography className={styles.itemTitle}>
                        {t(`dashboard.${c?.title}`)}
                      </Typography>
                    </Box>
                  );
                })}
            </Box>
          </div>
        </Box>
      </Zoom>
    </Grid>
  );
};

const DashboardHome = (props: Props) => {
  const [date, setDate] = useState();
  const [openDate, setOpenDate] = useState(false);
  const styles = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [dateState, setDateState] = useState<
    Array<{ startDate: Date; endDate: Date | null; key: string }>
  >([{ startDate: new Date(), endDate: null, key: 'selection' }]);
  const [dateAnchorElement, setDateAnchorElement] = useState(null);
  const open = Boolean(dateAnchorElement);
  const id = open ? 'date-popover' : undefined;
  const [stats, setStats] = useState([
    {
      id: 'purchases',
      heading: 'purchase_quantity_stats_text1',
      subHeading: 'purchase_quantity_stats_text2',
      bg: '#FF0036',
      ml: 0,
      icon: checklist,
      data: { total: 0, close: 0, open: 0 },
      child: [
        {
          title: 'open',
          key: 'open',
          count: 2000,
        },
        {
          title: 'closed',
          key: 'close',
          count: 2500,
        },
        {
          title: 'total',
          key: 'total',
          count: 2500,
        },
      ],
    },
    {
      id: 'changeRequests',
      heading: 'change_request_stats_text1',
      subHeading: 'change_request_stats_text2',
      ml: 3,
      bg: '#1AB1B0',
      icon: request,
      data: { total: 0, close: 0, open: 0 },
      child: [
        {
          title: 'open',
          key: 'open',
          count: 0,
        },
        {
          title: 'closed',
          key: 'close',
          count: 0,
        },
        {
          title: 'total',
          key: 'total',
          count: 0,
        },
      ],
    },
    {
      id: 'users',
      heading: 'user_stats_text',
      subHeading: 'user_stats_text2',
      ml: 3,
      bg: '#FF7544',
      icon: people,
      data: { total: 0, last24Hr: 0 },
      child: [
        {
          title: 'connected',
          key: 'total',
          count: 0,
        },
        {
          title: 'last24hr',
          key: 'last24Hr',
          count: 0,
        },
        {
          title: 'last24hr',
          key: 'last24Hr',
          count: 0,
        },
      ],
    },
    {
      id: 'mobileUsers',
      heading: 'app_user_stats_text',
      subHeading: 'app_user_stats_text2',
      ml: 3,
      bg: '#8677FE',
      icon: userApp,
      data: { total: 0, monthCount: 0, countOf45Days: 0 },
      child: [
        {
          title: 'total',
          key: 'total',
          count: 0,
        },
        {
          title: 'new_in_30_days',
          key: 'monthCount',
          count: 0,
        },
        {
          title: 'new_in_45_days',
          key: 'countOf45Days',
          count: 0,
        },
      ],
    },
  ]);

  const [{startDate, endDate}] = dateState;

  const handleClose = () => {
    setDateAnchorElement(null);
  };

  useEffect(() => {
    // console.log(dateState);
    if (dateState && dateState[0]) {
      // const startDate = getFormattedDateTime(new Date(dateState[0].startDate).toISOString(), 'MM-dd-yyyy');
      // const endDate = getFormattedDateTime(new Date(dateState[0].endDate || "").toISOString(), 'MM-dd-yyyy');
      console.log(dateState);
    }
  }, [dateState]);

  const { changeRequests, users, mobileUsers } =
    useSelector(selectDashboardStats);
  const { loginGraph, salesGraph, serviceCallsGraph } = useSelector(
    selectDashboardGraphs,
  );

  // useEffect(() => {
  //   let allData = [...stats];
  //   const index = allData.findIndex(x => x.id === 'changeRequests');
  //   allData[index].data = changeRequests;
  //   setStats(allData);
  // }, [changeRequests]);

  // useEffect(() => {
  //   let allData = [...stats];
  //   const index = allData.findIndex(x => x.id === 'users');
  //   allData[index].data = users;
  //   setStats(allData);
  // }, [users]);

  // useEffect(() => {
  //   let allData = [...stats];
  //   const index = allData.findIndex(x => x.id === 'mobileUsers');
  //   allData[index].data = mobileUsers;
  //   setStats(allData);
  // }, [mobileUsers]);

  const mappedDashboardItems = (
    <>
      {stats.map((di, index) => (
        <DashboardItem index={index} key={`dashboard-item-${index}`} {...di} />
      ))}
    </>
  );

  useEffect(() => {
    const [{ startDate, endDate }] = dateState;
    // dispatch(actions.getDashboardStats({ startDate, endDate }));
  }, [dateState]);

  const handleDateChange = e => {
    // console.log(e);
    if (e && e.target) setDate(e.target.value);
  };

  const handleOpen = e => {
    setDateAnchorElement(e.currentTarget);
  };

  return (
    <>
      <Page className={styles.pagePadding}>
        <PageHeading
          heading={t('common.dashboard')}
          className={clsx(styles.dashboardPageHeading, styles.pageSpacing)}
        />
        <Container maxWidth={false} className={styles.container}>
          <Grid container gap={0} m={0}>
            {mappedDashboardItems}
          </Grid>
        </Container>
        <Container
          maxWidth={false}
          className={clsx(styles.chartContainer, styles.pageSpacing)}
        >
          <Grid container gap={0} m={0}>
            <Grid item xs={12}>
              <Box className={styles.statsHeader}>
                <Box display={'flex'} alignItems="center">
                  <Typography className={styles.statsTitle}>
                    {t('dashboard.stats')}
                  </Typography>
                  <Typography
                    onClick={() => setOpenDate(true)}
                    className={styles.statsDate}
                  >
                    {startDate && getFormattedDateTime(new Date(startDate).toISOString(), 'dd MMM yyyy')} - {endDate && getFormattedDateTime(new Date(endDate).toISOString(), 'dd MMM yyyy')}
                  </Typography>
                </Box>
                <Box display={'flex'} alignItems="center">
                  <IconButton disabled onClick={handleOpen} aria-describedby={id}>
                    <DateButton />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid
              className={styles.chartItemContainer}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <CustomChart
                series={loginGraph.flatMap(x => [x.count])}
                categories={loginGraph.flatMap(x => [
                  getFormattedDateTime(
                    new Date(x.date).toISOString(),
                    'd MMMM',
                  ),
                ])}
                colors={['#B7FFF2', '#FFE5B7']}
              />
              <Typography className={styles.chartHeading}>
                {t('dashboard.login_per_day_text')}
              </Typography>
            </Grid>
            <Grid
              className={styles.chartItemContainer}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <CustomChart
                series={salesGraph.flatMap(x => [x.count])}
                categories={salesGraph.flatMap(x => [
                  getFormattedDateTime(
                    new Date(x.date).toISOString(),
                    'd MMMM',
                  ),
                ])}
                colors={['#CEC8F9', '#FDB197']}
              />
              <Typography className={styles.chartHeading}>
                {t('dashboard.salse_per_day')}
              </Typography>
            </Grid>
            <Grid
              className={styles.chartItemContainer}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <CustomChart
                series={serviceCallsGraph.flatMap(x => [x.count])}
                categories={serviceCallsGraph.flatMap(x => [
                  getFormattedDateTime(
                    new Date(x.date).toISOString(),
                    'd MMMM',
                  ),
                ])}
                colors={['#69EBEA', '#FFD5B7']}
              />
              <Typography className={styles.chartHeading}>
                {t('dashboard.request_for_service_text')}
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Popover
          open={open}
          id={id}
          anchorEl={dateAnchorElement}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <DateRangePicker onChange={setDateState} date={dateState} />
        </Popover>
      </Page>
    </>
  );
};

export default DashboardHome;
