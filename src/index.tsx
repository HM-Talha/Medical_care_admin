/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'sanitize.css/sanitize.css';
import './index.css';
// Initialize languages
import './locales/i18n';
import 'react-toastify/dist/ReactToastify.css';

import { App } from './app';
import FontFaceObserver from 'fontfaceobserver';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { configureAppStore } from './store/configureStore';
import { ThemeProvider } from './styles/theme/ThemeProvider';

import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

interface Props {
  Component: typeof App;
}
const ConnectedApp = ({ Component }: Props) => (
  <>
    <CssBaseline />
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider>
        <StyledEngineProvider injectFirst>
          <HelmetProvider>
            <React.StrictMode>
              <Component />
            </React.StrictMode>
          </HelmetProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </Provider>
  </>
);



const render = (Component: typeof App) => {
  const root = createRoot(MOUNT_NODE); 
  root.render(<ConnectedApp Component={Component} />);
};

if (module && module?.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module?.hot.accept([ './app', './locales/i18n' ], () => {
    const root = createRoot(MOUNT_NODE); 
    root.unmount();
    const App = require('./app').App;
    render(App);
  });
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// serviceWorker.unregister();
reportWebVitals();