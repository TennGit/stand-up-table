/**
 * Created by hengl on 22/05/2017.
 */

import React from 'react'

const HeaderWeekNumber = (props) => {
    const weekNumber = props.weekno
    return(
        <h1>This is week {weekNumber}</h1>
    )
}

export default HeaderWeekNumber