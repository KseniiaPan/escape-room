import {Link} from 'react-router-dom';
import {useRef, FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/index';
import {loginAction} from '../../store/api-actions';
import {AppRoute} from '../../consts';

function LoginForm(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLoginFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value
      }))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            navigate(AppRoute.Main);
          }
        });
    }
  };

  return (
    <div className="login__form">
      <form
        className="login-form"
        action="https://echo.htmlacademy.ru/"
        method="post"
        onSubmit={handleLoginFormSubmit}
      >
        <div className="login-form__inner-wrapper">
          <h1 className="title title--size-s login-form__title">Вход</h1>
          <div className="login-form__inputs">
            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="email">
                  E&nbsp;–&nbsp;mail
              </label>
              <input
                ref={loginRef}
                type="email"
                id="email"
                name="email"
                placeholder="Адрес электронной почты"
                required
              />
            </div>
            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="password">
                  Пароль
              </label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
                placeholder="Пароль"
                minLength={3}
                maxLength={15}
                pattern='^.*(?=.*[a-zA-Z])(?=.*\d).*$'
                title='Пароль должен содержать буквы латинского алфавита и цифры: минимум 1 букву и 1 цифру. Длина пароля должна составлять от 3 до 15 символов'
                required
              />
            </div>
          </div>
          <button
            className="btn btn--accent btn--general login-form__submit"
            type="submit"
          >
              Войти
          </button>
        </div>
        <label className="custom-checkbox login-form__checkbox">
          <input
            type="checkbox"
            id="id-order-agreement"
            name="user-agreement"
            required
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">
              Я&nbsp;согласен с
            <Link className="link link--active-silver link--underlined" to={'#'}>
                правилами обработки персональных данных
            </Link>
              &nbsp;и пользовательским соглашением
          </span>
        </label>
      </form>
    </div>
  );
}

export default LoginForm;
