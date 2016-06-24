/**
 * Created by ihoffmann on 6/24/16.
 */
import { combineReducers } from 'redux';
//TODO Replace with your reducers
//import pubsReducer from './pubs_example_reducer';

// here we combine reducers. the variable "reducers" will be an object
// with all of our state's reducers. the variable rootReducers then combines
// our reducers with a routing reducer (and potential other 3rd party store tie-ins).

const reducers = {
    //pubsReducer
};

const rootReducer = combineReducers({
    ...reducers
});

export default rootReducer;