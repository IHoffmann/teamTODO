/**
 * Created by ihoffmann on 6/24/16.
 */
import React, { PropTypes } from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';

const App = () => (
    <div>
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;