import React from 'react';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import {store} from './store';
import App from './components/app/app';
import {mockQuests} from './mocks/mock-quests';
import {mockBookingInfo} from './mocks/mock-booking-info';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App quests={mockQuests} bookingInfo={mockBookingInfo}/>
    </Provider>
  </React.StrictMode>
);
