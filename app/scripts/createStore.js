/**
 * Created by ihoffmann on 6/24/16.
 */
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from 'reducers';

// here we implement a bit of an expanded createStore and pass it our reducers
// as well as some helpful middleware.

export default function() {
    const finalCreateStore = compose(
        applyMiddleware(
            thunk
        ),
        batchedSubscribe(batchedUpdates)
        // the following line is middleware that is used to kick off the redux
        // chrome plugin for debugging redux state, uncomment to use it!
        //
        // , window.devToolsExtension ? window.devToolsExtension() : undefined
    )(createStore);

    const store = finalCreateStore(rootReducer);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}