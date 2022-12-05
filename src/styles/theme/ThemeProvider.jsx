import React from 'react';
import { useInjectReducer } from 'redux-injectors';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import rtl from 'jss-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { create } from "jss";
import { StylesProvider, jssPreset } from "@mui/styles"
import MuiTheme from './mui';
import { reducer, selectDirection, themeSliceKey } from './slice';
import { useSelector } from 'react-redux';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
export const ThemeProvider = (props) => {
  useInjectReducer({ key: themeSliceKey, reducer: reducer });

  const themeDirection = useSelector(selectDirection)


  return (
    <StylesProvider jss={jss}>
      <CacheProvider value={cacheRtl}>
        <MuiThemeProvider theme={{ ...MuiTheme, direction: themeDirection || 'ltr' }}>
            {props.children}
        </MuiThemeProvider>
      </CacheProvider>
    </StylesProvider>
  );
};
