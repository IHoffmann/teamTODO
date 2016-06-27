/**
 * Created by ihoffmann on 6/27/16.
 */
import React, { PropTypes } from 'react';

const FilterOption = ({ filterType, onSelect}) => (
    <option value={filterType} onselect={onSelect}>{filterType}</option>
);

FilterOption.PropTypes = {
    filterType: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default FilterOption;