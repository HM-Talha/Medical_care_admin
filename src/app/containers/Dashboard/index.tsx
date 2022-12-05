import React from "react";
import { Outlet } from "react-router-dom";
// import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import Snackbar from "app/components/Snackbar";
import { Box } from "@mui/material";

import Content from "./components/content";
import Topbar from "./components/topbar";
import { reducer, sliceKey } from "./slice";
import { useDashboardSaga } from "./saga";

type Props = {};

const DashboardPage = (props: Props) => {
  // useInjectReducer({
  //   key: sliceKey,
  //   reducer: reducer,
  // });

  // useInjectSaga({
  //   key: sliceKey,
  //   saga: useDashboardSaga,
  // });

  return (
    <Box display="flex" alignItems={"center"}>
      <Content>
        <Topbar />
        <Outlet />
        <Snackbar />
      </Content>
    </Box>
  );
};

export default DashboardPage;
