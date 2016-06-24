/**
 * Created by ihoffmann on 6/24/16.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//TODO Replace these with my actions and selectors
//import { getPubs, addNewPub } from 'actions/pubs_example_actions';
//import { pubsMessageSelector } from 'selectors/example_selector';
import Main from 'components/Main';

// the following is called a container or "smart component", this component
// wraps a view component and passes along to it properties from the state as
// props for that component, as well as functions as props from our actions.

// a "smart component" thus is a wrapper component that is "smart" enough to get
// data from our store. while a typic react view component is "dumb" because it relies
// on store data to come from a wrapper.

function mapStateToProps(state) {
    //const { pubsReducer } = state;
    return {
        //pubData: pubsMessageSelector(state),
        //loadingStatus: pubsReducer.loadingStatus,
        //pubError: pubsReducer.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //getPubData: bindActionCreators(getPubs, dispatch),
        //addPubData: bindActionCreators(addNewPub, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main); // here's our reference to our view "dumb" component