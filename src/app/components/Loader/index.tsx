import { Box } from '@mui/material';
import React from 'react';
import { LoadingIndicator } from '../LoadingIndicator';

type Props = { loading: boolean; className?: any };

const Loader = ({ loading, className }: Props) => {
  return (
    <>
      {loading && (
        <Box display={'flex'} py={4} justifyContent="center" className={className}>
          <LoadingIndicator />
        </Box>
      )}
    </>
  );
};

export default Loader;
