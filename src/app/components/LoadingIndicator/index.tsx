import React from 'react';

import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';

export const LoadingIndicator = (props: CircularProgressProps) => (
  <CircularProgress {...props} />
);
