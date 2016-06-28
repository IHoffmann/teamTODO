/**
 * Created by ihoffmann on 6/27/16.
 */
import React, { PropTypes } from 'react';

const FilterOption = ({filterType, odnClick}) => (
    <option value={filterType} onClick={onClick}>{filterType}</option>
);

FilterOption.PropTypes = {
    filterType: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FilterOption;