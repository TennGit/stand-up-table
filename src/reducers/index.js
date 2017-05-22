/**
 * Created by hengl on 17/05/2017.
 */

import {combineReducers} from "redux";
import addTask from "./addTaskReducer";
import controlBtnGroup from "./controlBtnGroupReducer"


const rootReducer = combineReducers({
    addTask,
    controlBtnGroup,
})

export default rootReducer;