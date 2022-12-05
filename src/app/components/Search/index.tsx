import SearchIc from 'app/components/SearchIcon';
import clsx from 'clsx';
import React from 'react';
import useWindowDimensions from 'utils/hooks/useWindowDimensions';

import MuiTextField from '@mui/material/TextField';

import { useStyles } from './styles';

export const Search = ({ width = 0, className = '', endIcon = <SearchIc />, placeholder = "", ...props }) => {
    const classes = useStyles({ width });
    const window = useWindowDimensions();
    return (
        <MuiTextField
            margin="normal"
            className={clsx([ 'TextInput', classes.TextInput, className ])}
            InputProps={{ endAdornment: endIcon }}
            placeholder={window.width > 1500 ? placeholder : placeholder.length > 20 ? placeholder.substr(0, 25) + "..." : placeholder}
            {...props}
        />
    );
};

