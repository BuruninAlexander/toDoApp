import React from 'react'
import classes from './MyButtonModules.css'

function MyButton({ children, ...props }) {
    return (
        <button
            style={{
                padding: "5px 15px",
                color: "teal",
                fontsize: "14px",
                background: "transparent",
                border: " 1px solid teal",
                cursor: "pointer",
            }}
            className={classes.myBtn} {...props} >
            {children}
        </button >
    )
}
export default MyButton;