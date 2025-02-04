import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import ContactsPage from '../../pages/contacts-page/contacts-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import QuestBookingPage from '../../pages/quest-booking-page/quest-booking-page';
import QuestPage from '../../pages/quest-page/quest-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {AppRoute} from '../../consts';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={
              <LoginPage />
            }
          />
          <Route
            path={AppRoute.MyQuests}
            element={<MyQuestsPage />}
          />
          <Route
            path={AppRoute.Quest}
            element={<QuestPage />}
          />
          <Route
            path={AppRoute.QuestBooking}
            element={<QuestBookingPage />}
          />
          <Route
            path={AppRoute.Contacts}
            element={<ContactsPage />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );

}

export default App;
