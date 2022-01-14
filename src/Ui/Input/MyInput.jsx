import React from 'react'
// import classes from '/Users/buruninaleksandr/Desktop/webApp Type+React/my-app/src/Ui/Input/'
const MyInput = (props) => {
    return (

        <div>
            <input style={{
                width: "50%",
                padding: "5px 15px",
                margin: "5px 0",
                border: "1px solid teal"
            }}
                className={"Тут должны быть стили"} {...props}></input>

        </div>
    )
}
export default MyInput;