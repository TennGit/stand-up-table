/**
 * Created by hengl on 22/05/2017.
 */

import {connect} from "react-redux";
import ControlTableGroup from "../components/ControlTableGroupComponent";
import gotoprevious from "../actions/controlBtnGroup"

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        gotoprevious: () => {
            dispatch(gotoprevious())
        }
    }
}

const ControlTableGroupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlTableGroup)

export default ControlTableGroupContainer;