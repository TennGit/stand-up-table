/**
 * Created by hengl on 22/05/2017.
 */


import React from 'react'
import styled from 'styled-components';

const Table = styled.table`
    border: 1px solid black;
`

const Th = styled.th`
    border: 1px solid black;
`

const Td = styled.td`
    border: 1px solid black;
`

const StandUpTable = (props) => {
    let inputMonday;
    let inputTuesday;
    let inputWednesday;
    let inputThursday;
    let inputFriday;

    const weekno = props.controlBtnGroup.weekno;

    console.log("props from container")
    console.log(`weekno ${props.controlBtnGroup.weekno}`)
    console.log(props)
    console.log("Ends")

    return(
        <div>
            <form onSubmit={e=> {
                e.preventDefault()
                props.addToTask(weekno, inputMonday.value,inputTuesday.value,inputWednesday.value,inputThursday.value,inputFriday.value)
            }}>
                <Table>
                    <thead>
                    <tr>
                        <Th>
                            Name
                        </Th>
                        <Th>
                            Monday
                        </Th>
                        <Th>
                            Tuesday
                        </Th>
                        <Th>
                            Wednesday
                        </Th>
                        <Th>
                            Thursday
                        </Th>
                        <Th>
                            Friday
                        </Th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td>
                                Tenn
                            </Td>
                            <Td>
                                <input ref={monday=>{
                                    inputMonday=monday
                                }} />
                            </Td>
                            <Td>
                                <input ref={tuesday=>{
                                    inputTuesday=tuesday
                                }} />
                            </Td>
                            <Td>
                                <input ref={wednesday=>{
                                    inputWednesday=wednesday
                                }} />
                            </Td>
                            <Td>
                                <input ref={thursday=>{
                                    inputThursday=thursday
                                }} />
                            </Td>
                            <Td>
                                <input ref={friday=>{
                                    inputFriday=friday
                                }} />
                            </Td>
                        </tr>
                    </tbody>
                </Table>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default StandUpTable;