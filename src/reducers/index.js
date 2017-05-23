/**
 * Created by hengl on 17/05/2017.
 */

import {combineReducers} from "redux";
import allTasks from "./addTaskReducer";
import controlBtnGroup from "./controlBtnGroupReducer"

const rootReducer = combineReducers({
    allTasks,
    controlBtnGroup,
})

export default rootReducer;