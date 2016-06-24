/**
 * Created by ihoffmann on 6/24/16.
 */
import React, { PropTypes } from 'react';
import AddBar from '../components/AddBar';
import VisSelector from '../components/VisSelector';

const Footer = () => (
    <div>
        <AddBar /><VisSelector />
    </div>
);

export default Footer;