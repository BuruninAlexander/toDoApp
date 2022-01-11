import React from 'react'
import classes from './MyButtonModules.css'

function MyButton({ children, ...props }) {
    return (
        <button className={classes.myBtn} {...props} >
            {children}
        </button>
    )
}
export default MyButton;