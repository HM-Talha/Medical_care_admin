import React from 'react';

import { Box } from '@mui/material';

const PageFilterBar = ({ className = "", children }) => {
    return <Box position='relative' mx={.2} mb={2.25} className={className}>
        {children}
    </Box>;
};

export default PageFilterBar;
