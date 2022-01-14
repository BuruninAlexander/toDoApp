import React, { useState } from "react"
const MySelect = ({ options, defaultOption, value, onChange }) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}>

            <option disabled value=" ">{defaultOption}</option>
            {options.map(e =>
                <option value={e.value} key={e.value} >
                    {e.name}
                </option>

            )}
        </select>

    )
}
export default MySelect;