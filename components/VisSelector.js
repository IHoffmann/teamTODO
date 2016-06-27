/**
 * Created by ihoffmann on 6/24/16.
 */
import React, { PropTypes } from 'react';
import Filter from '../containers/Filter.js';

const VisSelector = ({ onSelect}) => (
    <div>
        <select>
            <Filter filter="SHOW_ALL"/>
            <Filter filter="SHOW_ACTIVE"/>
            <Filter filter="SHOW_COMPLETED"/>
        </select>
    </div>
);

export default VisSelector;