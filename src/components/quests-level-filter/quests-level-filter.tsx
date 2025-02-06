import {questLevels} from '../../consts';
import {capitalize, isDefaultCheked} from '../../utils/common';

function QuestsLevelFilter(): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {questLevels.map((questLevel) => (
          <li className="filter__item" key={questLevel.name}>
            <input type="radio" name="level" id={questLevel.name} defaultChecked={isDefaultCheked(questLevels[0], questLevel)} />
            <label className="filter__label" htmlFor={questLevel.name}>
              <span className="filter__label-text">{capitalize(questLevel.ruName)}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
export default QuestsLevelFilter;
