import React from 'react'
import "../App.css"

function Table(props) {
    const toggleTable = () => {
        document.getElementById("resultTable").style.left = "-100%";
    };
    return (
        <div className='Tablecontainer' id='resultTable'>
            <button type='button' onClick={toggleTable} style={{ position: "absolute", top: "5%", left: "5%" }}>❌</button>
            <table cellSpacing="50">
                <thead>
                    <tr>
                        <th>#-</th>
                        <th>Property</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1-</th>
                        <td>Name </td>
                        <td>{props.name}</td>
                    </tr>
                    <tr>
                        <th>2-</th>
                        <td>Email </td>
                        <td>{props.email}</td>
                    </tr>
                    <tr>
                        <th>3-</th>
                        <td>Password </td>
                        <td>{props.password}</td>
                    </tr>
                    <tr>
                        <th>4-</th>
                        <td>Gender </td>
                        <td>{props.gender}</td>
                    </tr>
                    <tr>
                        <th>5-</th>
                        <td>Language's </td>
                        <td>{props.langOne} {props.langTwo}</td>
                    </tr>
                    <tr>
                        <th>6-</th>
                        <td>Degree </td>
                        <td>{props.degree}</td>
                    </tr>
                    <tr>
                        <th>7-</th>
                        <td>Wake Up Time </td>
                        <td>{props.wakeup} O Clock's AM</td>
                    </tr>
                    <tr>
                        <th>8-</th>
                        <td>Message </td>
                        <td>{props.message}</td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}

export default Table
