/**
 * Created by ihoffmann on 6/27/16.
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import VisSelector from '../components/VisSelector'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(VisSelector)

export default FilterLink