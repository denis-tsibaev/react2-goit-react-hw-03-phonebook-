import style from './Filter.module.css';

const Filter = ({ value, onFilterChange }) => (
    <div>
        <label>
            Find contacts by name
            <input
                type="text"
                className={style.filterInput}
                value={value}
                onChange={onFilterChange}
            />
        </label>
    </div>
);

export default Filter;
