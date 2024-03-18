import React from 'react'

function ShowError(props) {
    const alertStyles = {
        position: "absolute",
        top: "3%",
        left: "50%",
        transform: "translate(-50%,0%)",
        color: "red",
        backgroundColor: "#fff"

    }
    return (
        <div style={alertStyles} >
            <h3>{props.error}</h3>
            <ul>
                {props.passwordWatn}
                {props.passwordWarnNums}
            </ul>

        </div>
    )
}

export default ShowError
