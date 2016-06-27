/**
 * Created by ihoffmann on 6/27/16.
 */
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/actions';
import FilterOption from '../components/FilterOption';

const mapStateToProps = (state, ownProps) => {
    return {
        filterType: ownProps.filter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSelect: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

const Filter = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterOption);

export default Filter;