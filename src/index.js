import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { store, persistor } from 'redux/store';
import { darkTheme } from './ThemeMade';
import { ThemeProvider } from 'styled-components';

import 'react-responsive-pagination/themes/minimal.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/SoYummy-project">
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </BrowserRouter>
        </PersistGate>
        </ThemeProvider>
    </Provider>
);
