/**
 * Created by hengl on 22/05/2017.
 */

import {connect} from "react-redux";
import ControlTableGroup from "../components/ControlTableGroupComponent";
import gotoprevious, {gotonext} from "../actions/controlBtnGroup"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
    return {
        gotopreviousweek: () => {
            dispatch(gotoprevious())
        },
        gotonextweek: ()=>{
            dispatch(gotonext())
        }
    }
}

const ControlTableGroupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlTableGroup)

export default ControlTableGroupContainer;