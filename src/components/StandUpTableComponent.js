/**
 * Created by hengl on 22/05/2017.
 */


import React from 'react'
import styled from 'styled-components';

const Table = styled.table`
    border: 1px solid black;
`

const StandUpTable = (state) => {
    return(
        <div>
            <br/><br/>
            <Table>
                <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Monday
                    </th>
                    <th>
                        Tuesday
                    </th>
                    <th>
                        Wednesday
                    </th>
                    <th>
                        Thursday
                    </th>
                    <th>
                        Friday
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Tenn
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default StandUpTable;