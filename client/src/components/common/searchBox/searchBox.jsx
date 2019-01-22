import React from 'react';
import './style.scss';

const SearchBox = ({ value, onChange }) => {
    return (
        <div className="search-box">
            <input
                type="text"
                name="query"
                placeholder="Søg efter destinationer, tid, flyselskab eller flynummer"
                value={value}
                onChange={e => onChange(e.currentTarget.value)}
                />
        </div>
    );
};

export default SearchBox;