import React from 'react';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import {store} from './store';
import App from './components/app/app';
import {mockBookingInfo} from './mocks/mock-booking-info';
import {checkAuthAction, fetchQuestsAction} from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchQuestsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App bookingInfo={mockBookingInfo}/>
    </Provider>
  </React.StrictMode>
);
