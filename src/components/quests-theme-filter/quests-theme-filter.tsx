import {MouseEvent} from 'react';
import {questThemes} from '../../consts';
import {isDefaultCheked} from '../../utils/common';
import {useAppDispatch} from '../../hooks/index';
import {changeQuestTheme} from '../../store/app-process/app-process';

function QuestsThemeFilter(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleThemeClick = (evt: MouseEvent<HTMLInputElement>) => {
    const currentTheme = (evt.target as HTMLInputElement).value;
    dispatch(changeQuestTheme(currentTheme));
  };

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {questThemes.map((questTheme) => (
          <li className="filter__item" key={questTheme.name}>
            <input type="radio" name="type" id={questTheme.name} value={questTheme.name} onClick={handleThemeClick} defaultChecked={isDefaultCheked(questThemes[0], questTheme)} />
            <label className="filter__label" htmlFor={questTheme.name}>
              <svg
                className="filter__icon"
                width={26}
                height={30}
                aria-hidden="true"
              >
                <use xlinkHref={`#icon-${questTheme.name}`}/>
              </svg>
              <span className="filter__label-text">{questTheme.ruName}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
export default QuestsThemeFilter;
