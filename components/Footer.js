/**
 * Created by ihoffmann on 6/24/16.
 */
import React, { PropTypes } from 'react';
import AddBar from '../components/AddBar';
import FilterLink from '../containers/Filter'

const Footer = () => (
    <div>
        <AddBar />
        <p>
            Show:
            {" "}
            <FilterLink filter="SHOW_ALL">
                All
            </FilterLink>
            {", "}
            <FilterLink filter="SHOW_ACTIVE">
                Active
            </FilterLink>
            {", "}
            <FilterLink filter="SHOW_COMPLETED">
                Completed
            </FilterLink>
        </p>
    </div>
);

export default Footer;