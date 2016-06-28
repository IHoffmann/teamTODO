/**
 * Created by ihoffmann on 6/24/16.
 */
import {SET_VIS} from '../actions/actions';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case SET_VIS:
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;