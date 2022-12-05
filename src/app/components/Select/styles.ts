
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

type styleProps = {
  width?: number;
  height?: number;
};

export const useStyles = makeStyles<Theme, styleProps>(theme => ({
  SelectInput: props => {
    let height = typeof props.height === 'number' && props.height > 0;
    let width = typeof props.width === 'number' && props.width > 0;
    return typeof props.width == 'number' && props.width > 0
      ? {
        lineHeight: 'unset',
        // maxWidth: props.width,
        // '& .MuiOutlinedInput-root': {
        //   minWidth: props.width,
        // },
        '& .MuiSelect-icon': {
          marginRight: 10,
        },
        '& .MuiSelect-iconOpen': {
          marginRight: 10,
        },
        ...(width || height)
        && {
          maxWidth: props.width,
          maxHeight: props.height,
          '& .MuiOutlinedInput-root': {
            minWidth: props.width,
            minHeight: props.height
          },
        }
      }
      : {};
  },
  labelClass: {
    fontSize: 16,
    fontWeight: 400,
    color: '#3C4858',
    marginBottom: 0,
    paddingBottom: 0,
    lineHeight: 'unset',
  }
}));
