import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { store, persistor } from 'redux/store';
import { Toaster } from 'react-hot-toast';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter basename="/SoYummy-project">
                    <HelmetProvider>
                        <App />
                    </HelmetProvider>
                </BrowserRouter>
                <Toaster position="top-center" reverseOrder={false} autoClose={2000} />
            </PersistGate>
        </Provider>
    </>
);
