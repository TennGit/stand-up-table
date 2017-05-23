/**
 * Created by hengl on 22/05/2017.
 */

import {connect} from "react-redux";
import StandUpTable from "../components/StandUpTableComponent";
import addToTask from "../actions"


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToTask: (weekno,monday,tuesday,wednesday,thursday,friday) => {
            dispatch(addToTask(weekno,monday,tuesday,wednesday,thursday,friday))
        }
    }
}

const StandUpTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StandUpTable)

export default StandUpTableContainer;