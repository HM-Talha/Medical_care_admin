import { CloudUpload, Delete, Theaters } from '@mui/icons-material';
import { Box, IconButton, Typography, Tooltip } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { formatBytes } from 'utils/helpers';
import { useStyles } from './styles';

const FileDetails = (props: any) => {
  console.log('file detail props', props);
  const styles = useStyles();
  const hideEdit = props.hideEdit;
  const size = formatBytes(props?.fileSize);
  const name =
    props.fileName.length > 23 ? (
      <Tooltip title={props.fileName}>
        <div>{props.fileName.substr(0, 20) + '...'}</div>
      </Tooltip>
    ) : (
      props.fileName
    );
  return (
    <Box className={clsx(styles.root, props.className)}>
      <Box className={styles.detailsContainer}>
        <Box>
          <Box className={styles.iconOuter}>
            <Box className={styles.iconInnerContainer}>
              <Theaters sx={{ color: '#FFF' }} />
            </Box>
          </Box>
        </Box>
        <Box ml={1}>
          <Typography className={styles.nameLabel}>{name}</Typography>
          <Typography className={styles.sizeLabel}>
            {size === 'NaN undefined' ? '-' : size}
          </Typography>
        </Box>
      </Box>
      <Box>
        {!hideEdit && (
          <Tooltip title="Upload asset">
            <IconButton onClick={props.onEdit}>
              <CloudUpload sx={{ color: '#FAA61A' }}  />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="Delete asset">
          <IconButton onClick={props.onRemove}>
            <Delete sx={{ color: '#FF666E' }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default FileDetails;
