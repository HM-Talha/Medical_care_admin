import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

type styleProps = {
    width?: any;
    height?: any;
};

export const useStyles = makeStyles<Theme, styleProps>(theme => ({
    TextInput: props => {
        let height = typeof props.height === 'number' && props.height > 0;
        let width = typeof props.width === 'number' && props.width > 0;
        return (width || height)
            ? {
                maxWidth: props.width,
                maxHeight: props.height,
                '& .MuiOutlinedInput-root': {
                    minWidth: props.width,
                    minHeight: props.height
                },
                margin: 0,
                background: 'inherit'
            }
            : {
                margin: 0,
                background: 'inherit'
            };

    },

}));
