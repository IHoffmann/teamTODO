/**
 * Created by ihoffmann on 6/24/16.
 */
import 'isomorphic-fetch';
import promise from 'es6-promise';
import React, {
    Component
} from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';
import Main from 'containers/Main';

promise.polyfill();

const store = createStore();

export default class PublishingDialogApp extends Component {
    static displayName = 'PublishingDialogApp';

    render() {
        return (
            <Provider store={store}>
            <Main />
            </Provider>
    );
    }
}
