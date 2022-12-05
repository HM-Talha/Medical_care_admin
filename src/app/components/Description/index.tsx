import { Tooltip, Typography } from '@mui/material';
import React from 'react';

type Props = {
  text: any;
};

const DescriptionText = ({ text }: Props) => {
  return (
    <>
      {text && text.length > 17 ? (
        <Tooltip title={text}>
          <Typography component="span">
            {text.substr(0, 14) + '...'}
          </Typography>
        </Tooltip>
      ) : (
        <Typography component="span">{text}</Typography>
      )}
    </>
  );
};

export default DescriptionText;
