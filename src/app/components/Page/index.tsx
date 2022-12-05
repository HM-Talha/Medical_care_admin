import React from 'react';

import { Box } from '@mui/material';

const Page = (props) => {
    return <Box mx={5.4} className={props?.className}>{props?.children}</Box>;
};

export default Page;
