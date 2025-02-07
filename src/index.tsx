import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {mockQuests} from './mocks/mock-quests';
import {mockBookingInfo} from './mocks/mock-booking-info';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App quests={mockQuests} bookingInfo={mockBookingInfo}/>
  </React.StrictMode>
);
