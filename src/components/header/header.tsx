import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {logoutAction} from '../../store/api-actions';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function Header (): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const myQuestsPageUrl : string = AppRoute.MyQuests;
  const isQuestBookingPage = pathname.includes('booking');
  const ismyQuestsPage = pathname === myQuestsPageUrl;
  const isAuthorized = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  const handleLogoutClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logoutAction()).then(() => {
      if (isAuthorized && (isQuestBookingPage || ismyQuestsPage)) {
        navigate(AppRoute.Login);
      } else {
        navigate(pathname);
      }
    });
  };
  return (
    <header className="header">
      <div className="container container--size-l">
        <span className="logo header__logo">
          <svg width={134} height={52} aria-hidden="true">
            <use xlinkHref="#logo" />
          </svg>
        </span>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="link" to={AppRoute.Main}>
              Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to={AppRoute.Contacts}>
              Контакты
              </Link>
            </li>
            {isAuthorized &&
              <li className="main-nav__item">
                <Link className="link" to={AppRoute.MyQuests}>
              Мои бронирования
                </Link>
              </li>}
          </ul>
        </nav>
        <div className="header__side-nav">
          {isAuthorized ? (
            <Link className="btn btn--accent header__side-item" to={'#'} onClick={handleLogoutClick}>
          Выйти
            </Link>) : (
            <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход
            </Link>)}
          <Link
            className="link header__side-item header__phone-link"
            to={'tel:88003335599'}
          >
          8 (000) 111-11-11
          </Link>
        </div>
      </div>
    </header>
  );
}


export default Header;
