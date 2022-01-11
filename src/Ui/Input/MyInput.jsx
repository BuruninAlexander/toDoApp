import React from 'react'
import classes from './MyInputModule.css'
const MyInput = (props) => {
    return (

        <div>
            <input classname={classes.MyInput}{...props}></input>

        </div>
    )
}
export default MyInput;