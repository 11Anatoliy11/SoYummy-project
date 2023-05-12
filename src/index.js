import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename="/SoYummy-project">
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <HelmetProvider>
          <App />
        </HelmetProvider>
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
    <ToastContainer
      position="bottom-right"
      autoClose={300}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      transition={Zoom}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </>
);
