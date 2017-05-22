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

    console.log("props from container")
    console.log(props.monday)
    console.log("Ends")

    return(
        <div>
            <form onSubmit={e=> {
                e.preventDefault()
                props.addTask(inputMonday.value,inputTuesday.value,inputWednesday.value,inputThursday.value,inputFriday.value)
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
                                }} value={props.monday} />
                            </Td>
                            <Td>
                                <input ref={tuesday=>{
                                    inputTuesday=tuesday
                                }} value={props.tuesday}/>
                            </Td>
                            <Td>
                                <input ref={wednesday=>{
                                    inputWednesday=wednesday
                                }} value={props.wednesday}/>
                            </Td>
                            <Td>
                                <input ref={thursday=>{
                                    inputThursday=thursday
                                }} value={props.thursday}/>
                            </Td>
                            <Td>
                                <input ref={friday=>{
                                    inputFriday=friday
                                }} value={props.friday}/>
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