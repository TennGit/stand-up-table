/**
 * Created by hengl on 22/05/2017.
 */

import React from 'react'
const ControlTableGroup = (props) => {
    console.log("component")
    console.log(props)
    let currentWeekNo = props.controlBtnGroup.weekno==undefined?props.addTask.weekno:props.controlBtnGroup.weekno ;

    return(
        <div>
            <button onClick={()=>props.gotopreviousweek(currentWeekNo)}>previous</button>
            <button >next</button>
        </div>
            )
}

export default ControlTableGroup