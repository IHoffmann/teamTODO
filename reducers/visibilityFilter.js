/**
 * Created by ihoffmann on 6/24/16.
 */
import {SET_VIS} from '../actions/actions';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case SET_VIS:
            console.log(action.filter + " in the set_vis");
            return action.filter;
        default:
            console.log(state + " in the default");
            return state;
    }
};

export default visibilityFilter;