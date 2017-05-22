/**
 * Created by hengl on 22/05/2017.
 */

import {connect} from "react-redux";
import StandUpTable from "../components/StandUpTableComponent";
import addTask from "../actions"


const mapStateToProps = (state) => {
    return state.addTask
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (monday,tuesday,wednesday,thursday,friday) => {
            dispatch(addTask(monday,tuesday,wednesday,thursday,friday))
        }
    }
}

const StandUpTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StandUpTable)

export default StandUpTableContainer;