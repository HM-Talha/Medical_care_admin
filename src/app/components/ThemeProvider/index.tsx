import React from 'react';
import { useSelector } from 'react-redux';
import theme from 'styles/theme/mui';
import { selectDirection } from 'styles/theme/slice';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const SelectThemeProvider = (props) => {
    const direction = useSelector(selectDirection);
    const uiTheme = {
        ...theme,
        direction,
    }
    return (
        <>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={uiTheme}>
                    {props.children}
                </ThemeProvider>
            </CacheProvider>
        </>
    )
}

export default SelectThemeProvider