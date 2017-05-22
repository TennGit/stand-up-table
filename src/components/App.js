/**
 * Created by hengl on 22/05/2017.
 */


import React from 'react'
import StandUpTableContainer from '../containers/StandUpTableContainer'
import ControlTableGroupContainer from '../containers/ControlTableGroupContainer'
import HeaderWeekNumberContainer from '../containers/HeaderWeekNumberContainer'


const App = () => (
    <div>
        <HeaderWeekNumberContainer />
        <StandUpTableContainer />
        <ControlTableGroupContainer />
    </div>
)

export default App