/**
 * Created by hengl on 22/05/2017.
 */

import React from 'react'
const ControlTableGroup = (props) => {
    return(
        <div>
            <button onClick={()=>props.gotopreviousweek()}>previous</button>
            <button onClick={()=>props.gotonextweek()}>next</button>
        </div>
            )
}

export default ControlTableGroup