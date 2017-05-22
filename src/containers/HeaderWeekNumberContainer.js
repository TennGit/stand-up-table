/**
 * Created by hengl on 22/05/2017.
 */

import {connect} from "react-redux";
import HeaderWeekNumber from "../components/HeaderWeekNumberComponent"

const defaultState = {weekno:1}
const mapStateToProps = (state) => {
    let weekno = state.controlBtnGroup===undefined?defaultState: state.controlBtnGroup;
    return weekno
}


const ControlTableGroupContainer = connect(
    mapStateToProps,
)(HeaderWeekNumber)

export default ControlTableGroupContainer;