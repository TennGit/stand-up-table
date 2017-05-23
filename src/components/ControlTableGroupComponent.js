/**
 * Created by hengl on 22/05/2017.
 */

import React from 'react'
import styled from 'styled-components'

const Il = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`

const Ir = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`
const Div=styled.div`
    display:overflow
`

const ControlTableGroup = (props) => (
    <Div>
        <button onClick={()=>props.gotopreviousweek()}><Il />previous</button>
        <button onClick={()=>props.gotonextweek()}>next<Ir /></button>
    </Div>
)

export default ControlTableGroup