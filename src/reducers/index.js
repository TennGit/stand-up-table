/**
 * Created by hengl on 17/05/2017.
 */

import {combineReducers} from "redux";
import addTask from "./addTaskReducer";

const rootReducer = combineReducers({
    addTask,
})

export default rootReducer;